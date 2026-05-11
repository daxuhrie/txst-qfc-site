'use client'
import { useState, useMemo } from 'react'
import Container from '../../../components/Container'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, ReferenceLine,
} from 'recharts'

// ── Types ─────────────────────────────────────────────────────────────────────

interface OptionContract {
    details: {
        contract_type: 'call' | 'put'
        expiration_date: string
        strike_price: number
    }
    implied_volatility: number
}

interface Greeks {
    price: number; delta: number; gamma: number
    theta: number; vega: number; rho: number
}

// ── Ticker profiles ───────────────────────────────────────────────────────────

const PROFILES: Record<string, { price: number; baseIV: number }> = {
    SPY:  { price: 560,  baseIV: 0.15 },
    QQQ:  { price: 480,  baseIV: 0.18 },
    IWM:  { price: 200,  baseIV: 0.22 },
    AAPL: { price: 210,  baseIV: 0.25 },
    MSFT: { price: 420,  baseIV: 0.22 },
    GOOGL:{ price: 175,  baseIV: 0.24 },
    AMZN: { price: 195,  baseIV: 0.28 },
    META: { price: 530,  baseIV: 0.30 },
    NVDA: { price: 900,  baseIV: 0.45 },
    AMD:  { price: 155,  baseIV: 0.42 },
    TSLA: { price: 175,  baseIV: 0.55 },
    COIN: { price: 240,  baseIV: 0.70 },
    GME:  { price: 25,   baseIV: 0.80 },
}
const DEFAULT_PROFILE = { price: 100, baseIV: 0.35 }

// ── Mock chain generator ──────────────────────────────────────────────────────

function addDays(date: Date, days: number): string {
    const d = new Date(date)
    d.setDate(d.getDate() + days)
    return d.toISOString().split('T')[0]
}

function mockIV(baseIV: number, K: number, S: number): number {
    // Equity-style skew: higher IV for lower strikes, slight smile
    const m = Math.log(K / S)
    return baseIV * Math.exp(-0.3 * m + 0.1 * m * m)
}

function generateMockChain(ticker: string): { stockPrice: number; options: OptionContract[] } {
    const { price: S, baseIV } = PROFILES[ticker] ?? DEFAULT_PROFILE
    const today = new Date()
    const expiries = [addDays(today, 30), addDays(today, 60)]

    const minStrike = Math.ceil((S * 0.80) / 5) * 5
    const maxStrike = Math.floor((S * 1.20) / 5) * 5

    const options: OptionContract[] = []
    for (const expiry of expiries) {
        for (let K = minStrike; K <= maxStrike; K += 5) {
            const iv = mockIV(baseIV, K, S)
            options.push({
                details: { contract_type: 'call', expiration_date: expiry, strike_price: K },
                implied_volatility: iv,
            })
            options.push({
                details: { contract_type: 'put', expiration_date: expiry, strike_price: K },
                implied_volatility: iv,
            })
        }
    }
    return { stockPrice: S, options }
}

// ── Black-Scholes ─────────────────────────────────────────────────────────────

function erf(x: number): number {
    const sign = x >= 0 ? 1 : -1
    x = Math.abs(x)
    const t = 1 / (1 + 0.3275911 * x)
    const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x)
    return sign * y
}

const ncdf = (x: number) => 0.5 * (1 + erf(x / Math.sqrt(2)))
const npdf = (x: number) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI)

function blackScholes(type: 'call' | 'put', S: number, K: number, T: number, r: number, sigma: number): Greeks | null {
    if (T <= 0 || sigma <= 0 || S <= 0 || K <= 0) return null
    const sqrtT = Math.sqrt(T)
    const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * sqrtT)
    const d2 = d1 - sigma * sqrtT
    const disc = Math.exp(-r * T)
    const nd1 = npdf(d1)

    const price = type === 'call'
        ? S * ncdf(d1) - K * disc * ncdf(d2)
        : K * disc * ncdf(-d2) - S * ncdf(-d1)

    return {
        price,
        delta: type === 'call' ? ncdf(d1) : ncdf(d1) - 1,
        gamma: nd1 / (S * sigma * sqrtT),
        theta: type === 'call'
            ? (-(S * nd1 * sigma) / (2 * sqrtT) - r * K * disc * ncdf(d2)) / 365
            : (-(S * nd1 * sigma) / (2 * sqrtT) + r * K * disc * ncdf(-d2)) / 365,
        vega: S * nd1 * sqrtT / 100,
        rho: type === 'call'
            ? K * T * disc * ncdf(d2) / 100
            : -K * T * disc * ncdf(-d2) / 100,
    }
}

function yearsToExpiry(expiry: string): number {
    const ms = new Date(expiry + 'T21:00:00Z').getTime() - Date.now()
    return Math.max(0, ms / (1000 * 60 * 60 * 24 * 365))
}

function fmt(n: number | undefined | null, d = 4): string {
    return n == null || isNaN(n) ? '—' : n.toFixed(d)
}

// ── Payoff Chart ──────────────────────────────────────────────────────────────

function PayoffChart({ strike, callPremium, putPremium, stockPrice }: {
    strike: number; callPremium: number; putPremium: number; stockPrice: number
}) {
    const range = stockPrice * 0.35
    const data = Array.from({ length: 81 }, (_, i) => {
        const S = stockPrice - range + (range * 2 * i) / 80
        return {
            price: +S.toFixed(2),
            call: +(Math.max(S - strike, 0) - callPremium).toFixed(4),
            put: +(Math.max(strike - S, 0) - putPremium).toFixed(4),
        }
    })

    return (
        <div className="mt-8 section-panel">
            <h3 className="text-base font-semibold text-white mb-1">
                Payoff at Expiry — Strike ${strike}
            </h3>
            <p className="text-xs muted mb-6">
                Long call (maroon) and long put (green) P&amp;L per share at expiration, before commissions.
            </p>
            <ResponsiveContainer width="100%" height={280}>
                <LineChart data={data} margin={{ top: 8, right: 24, bottom: 8, left: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                    <XAxis
                        dataKey="price"
                        tickFormatter={(v) => `$${v}`}
                        tick={{ fill: '#888', fontSize: 11 }}
                    />
                    <YAxis
                        tickFormatter={(v) => `$${v}`}
                        tick={{ fill: '#888', fontSize: 11 }}
                    />
                    <Tooltip
                        contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 6, fontSize: 12 }}
                        labelStyle={{ color: '#ccc' }}
                        formatter={(value, name) => [
                            `$${Number(value).toFixed(2)}`,
                            name === 'call' ? 'Long Call' : 'Long Put',
                        ]}
                        labelFormatter={(v) => `Underlying: $${v}`}
                    />
                    <Legend
                        formatter={(v) => (
                            <span style={{ color: '#aaa', fontSize: 12 }}>
                                {v === 'call' ? 'Long Call' : 'Long Put'}
                            </span>
                        )}
                    />
                    <ReferenceLine y={0} stroke="#444" strokeDasharray="4 4" />
                    <ReferenceLine
                        x={+stockPrice.toFixed(2)}
                        stroke="#444"
                        strokeDasharray="4 4"
                        label={{ value: 'Spot', position: 'top', fill: '#666', fontSize: 10 }}
                    />
                    <Line type="monotone" dataKey="call" stroke="rgb(124,42,42)" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="put" stroke="#4a9a4a" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

// ── Page ──────────────────────────────────────────────────────────────────────

const R = 0.045

export default function OptionsPage() {
    const [tickerInput, setTickerInput] = useState('')
    const [options, setOptions] = useState<OptionContract[]>([])
    const [stockPrice, setStockPrice] = useState<number | null>(null)
    const [selectedExpiry, setSelectedExpiry] = useState('')
    const [selectedStrike, setSelectedStrike] = useState<number | null>(null)

    function handleLoad() {
        const t = tickerInput.trim().toUpperCase()
        if (!t) return
        setOptions([])
        setStockPrice(null)
        setSelectedExpiry('')
        setSelectedStrike(null)

        const { stockPrice: sp, options: opts } = generateMockChain(t)
        setOptions(opts)
        setStockPrice(sp)
        const expiries = Array.from(new Set<string>(opts.map(o => o.details.expiration_date))).sort()
        if (expiries.length > 0) setSelectedExpiry(expiries[0])
    }

    const expiries = useMemo(() =>
        Array.from(new Set<string>(options.map(o => o.details.expiration_date))).sort(),
        [options]
    )

    const tableRows = useMemo(() => {
        if (!selectedExpiry || stockPrice == null) return []
        const S = stockPrice
        const T = yearsToExpiry(selectedExpiry)

        const byStrike = new Map<number, { call?: OptionContract; put?: OptionContract }>()
        for (const o of options) {
            if (o.details.expiration_date !== selectedExpiry) continue
            const k = o.details.strike_price
            if (!byStrike.has(k)) byStrike.set(k, {})
            const entry = byStrike.get(k)!
            if (o.details.contract_type === 'call') entry.call = o
            else entry.put = o
        }

        return Array.from(byStrike.entries())
            .sort(([a], [b]) => a - b)
            .map(([strike, { call, put }]) => {
                const cIV = call?.implied_volatility ?? 0
                const pIV = put?.implied_volatility ?? 0
                return {
                    strike,
                    callIV: cIV,
                    putIV: pIV,
                    callGreeks: cIV > 0 ? blackScholes('call', S, strike, T, R, cIV) : null,
                    putGreeks: pIV > 0 ? blackScholes('put', S, strike, T, R, pIV) : null,
                }
            })
    }, [options, selectedExpiry, stockPrice])

    const selectedRow = tableRows.find(r => r.strike === selectedStrike) ?? null

    return (
        <div className="min-h-screen bg-[#111111]">
            <Container className="py-12 md:py-20">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        Options Greeks Dashboard
                    </h1>
                    <div className="max-w-2xl mb-5 px-4 py-3 rounded-md border border-yellow-700/50 bg-yellow-950/30 text-yellow-300 text-sm">
                        <span className="font-semibold">Simulated data only.</span> Prices, implied volatilities, and Greeks are generated for educational purposes and do not reflect real market conditions.
                    </div>
                    <p className="muted text-base max-w-2xl">
                        Enter a ticker to explore its options chain. Delta, Gamma, Theta, Vega, and Rho are
                        computed from implied volatility using Black-Scholes (r&nbsp;=&nbsp;4.5%).
                        Click any strike row to view its payoff diagram.
                    </p>
                </div>

                {/* Input */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    <input
                        type="text"
                        value={tickerInput}
                        onChange={e => setTickerInput(e.target.value.toUpperCase())}
                        onKeyDown={e => e.key === 'Enter' && handleLoad()}
                        placeholder="e.g. SPY, AAPL, NVDA, TSLA"
                        className="px-4 py-3 rounded-md bg-[#1a1a1a] border border-[#333] text-white placeholder-[#555] focus:outline-none focus:border-[#7c2a2a] text-sm w-64 transition-colors"
                    />
                    <button
                        onClick={handleLoad}
                        disabled={!tickerInput.trim()}
                        className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        Load
                    </button>
                </div>

                {/* Results */}
                {options.length > 0 && (
                    <>
                        {/* Controls row */}
                        <div className="flex flex-wrap items-center gap-5 mb-6">
                            {stockPrice != null && (
                                <div className="section-panel !p-3">
                                    <p className="text-xs muted mb-0.5">Simulated Spot Price</p>
                                    <p className="text-xl font-semibold text-white font-mono">${stockPrice.toFixed(2)}</p>
                                </div>
                            )}
                            <div className="flex items-center gap-3">
                                <label className="text-sm muted whitespace-nowrap">Expiry date</label>
                                <select
                                    value={selectedExpiry}
                                    onChange={e => { setSelectedExpiry(e.target.value); setSelectedStrike(null) }}
                                    className="px-3 py-2 rounded-md bg-[#1a1a1a] border border-[#333] text-white text-sm focus:outline-none focus:border-[#7c2a2a] transition-colors"
                                >
                                    {expiries.map(exp => (
                                        <option key={exp} value={exp}>{exp}</option>
                                    ))}
                                </select>
                            </div>
                            <p className="text-xs muted">{tableRows.length} strikes &nbsp;·&nbsp; click a row to view payoff</p>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto rounded-lg border border-[#222]">
                            <table className="w-full text-sm border-collapse min-w-[860px]">
                                <thead>
                                    <tr className="bg-[#161616]">
                                        <th className="px-4 py-3 text-left text-xs text-[#666] font-semibold tracking-wider" rowSpan={2}>
                                            Strike
                                        </th>
                                        <th className="px-4 py-2 text-center text-xs text-[#999] font-semibold tracking-wider border-l border-[#222]" colSpan={6}>
                                            Calls
                                        </th>
                                        <th className="px-4 py-2 text-center text-xs text-[#999] font-semibold tracking-wider border-l border-[#2a2a2a]" colSpan={6}>
                                            Puts
                                        </th>
                                    </tr>
                                    <tr className="bg-[#161616] border-t border-[#1d1d1d]">
                                        {['IV %', 'Price', 'Δ Delta', 'Γ Gamma', 'Θ Theta', 'V Vega'].map(h => (
                                            <th key={`c${h}`} className="px-3 py-2 text-left text-xs text-[#555] font-medium border-l border-[#1d1d1d]">{h}</th>
                                        ))}
                                        {['IV %', 'Price', 'Δ Delta', 'Γ Gamma', 'Θ Theta', 'V Vega'].map(h => (
                                            <th key={`p${h}`} className="px-3 py-2 text-left text-xs text-[#555] font-medium border-l border-[#1d1d1d]">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map(row => {
                                        const isSelected = row.strike === selectedStrike
                                        const isATM = stockPrice != null &&
                                            Math.abs(row.strike - stockPrice) / stockPrice < 0.005
                                        return (
                                            <tr
                                                key={row.strike}
                                                onClick={() => setSelectedStrike(isSelected ? null : row.strike)}
                                                className={[
                                                    'cursor-pointer border-t border-[#1a1a1a] transition-colors',
                                                    isSelected
                                                        ? 'bg-[#7c2a2a]/20'
                                                        : isATM
                                                            ? 'bg-[#1e1e1e] hover:bg-[#222]'
                                                            : 'hover:bg-[#181818]',
                                                ].join(' ')}
                                            >
                                                <td className={`px-4 py-2.5 font-mono font-semibold ${isATM ? 'text-white' : 'text-[#bbb]'}`}>
                                                    {row.strike}
                                                    {isATM && <span className="ml-1.5 text-[10px] text-[#7c2a2a] font-sans">ATM</span>}
                                                </td>
                                                {/* Call cells */}
                                                <td className="px-3 py-2.5 font-mono text-[#aaa] border-l border-[#1a1a1a]">
                                                    {row.callIV ? (row.callIV * 100).toFixed(1) : '—'}
                                                </td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.callGreeks?.price, 2)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.callGreeks?.delta)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.callGreeks?.gamma)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.callGreeks?.theta)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.callGreeks?.vega)}</td>
                                                {/* Put cells */}
                                                <td className="px-3 py-2.5 font-mono text-[#aaa] border-l border-[#222]">
                                                    {row.putIV ? (row.putIV * 100).toFixed(1) : '—'}
                                                </td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.putGreeks?.price, 2)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.putGreeks?.delta)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.putGreeks?.gamma)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.putGreeks?.theta)}</td>
                                                <td className="px-3 py-2.5 font-mono text-[#aaa]">{fmt(row.putGreeks?.vega)}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Payoff diagram */}
                        {selectedStrike != null && selectedRow != null && stockPrice != null && (
                            <PayoffChart
                                strike={selectedStrike}
                                callPremium={selectedRow.callGreeks?.price ?? 0}
                                putPremium={selectedRow.putGreeks?.price ?? 0}
                                stockPrice={stockPrice}
                            />
                        )}
                    </>
                )}
            </Container>
        </div>
    )
}
