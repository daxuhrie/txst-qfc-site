export interface Project {
  id: string;
  title: string;
  description: string;
  ownerName: string;
  externalUrl: string;
  tags: string[];
  status: 'Active' | 'Completed' | 'In Development' | 'Under Development';
  paperUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'options-greeks-dashboard',
    title: 'Options Greeks Dashboard',
    description: 'An interactive Black-Scholes options pricing tool with live Greeks visualization across strikes and expiries. Computes Delta, Gamma, Theta, Vega, and Rho with payoff diagrams and volatility smile visualization.',
    ownerName: 'QFC',
    externalUrl: '/tools/options',
    tags: ['Options Pricing', 'Black-Scholes', 'Greeks', 'Volatility', 'Interactive'],
    status: 'Active',
  },
  {
    id: 'halo',
    title: 'HALO',
    description: 'A market-making system built on the Avellaneda-Stoikov model with a dynamic regime classifier using lag-1 autocorrelation and EWMA volatility, deployed on Kraken targeting SOL/USD. Achieved a Sharpe ratio of 2.4 at the optimal poll cadence.',
    ownerName: 'Colin Whetstone',
    externalUrl: 'https://github.com/ColinWhetstone/halo-market-maker',
    tags: ['Market Making', 'Avellaneda-Stoikov', 'Regime Classification', 'Kraken', 'Algorithmic Trading'],
    status: 'Completed',
    paperUrl: '/papers/Halo_Paper__2_.pdf',
  },
  {
    id: 'btc-eth-stat-arb',
    title: 'BTC/ETH Statistical Arbitrage',
    description: 'A pairs trading system using Engle-Granger cointegration to exploit the mean-reverting spread between BTC and ETH. Spread modeled as an Ornstein-Uhlenbeck process with a 28-minute half-life. Backtested Sharpe ratio of 1.48 with a max drawdown of 8.3%.',
    ownerName: 'Colin Whetstone',
    externalUrl: 'https://github.com/colinwhetstone/btc-eth-stat-arb',
    tags: ['Statistical Arbitrage', 'Pairs Trading', 'Cointegration', 'BTC', 'ETH'],
    status: 'Completed',
    paperUrl: '/papers/Stat_Arb_Paper.pdf',
  },
  {
    id: 'reddit-sentiment-analysis',
    title: 'Reddit Sentiment Analysis',
    description: 'A sentiment signal system scraping r/algorand and r/CryptoCurrency to predict short-term ALGO returns. Found statistically significant correlations at lag-2 post volume and lag-3 sentiment ratio. Timing strategy achieved a Sharpe ratio of 1.48 and +22% return vs -16.7% buy-and-hold.',
    ownerName: 'Colin Whetstone',
    externalUrl: 'https://github.com/colinwhetstone/reddit-sentiment-analysis',
    tags: ['Sentiment Analysis', 'NLP', 'Reddit', 'ALGO', 'Price Prediction'],
    status: 'Completed',
    paperUrl: '/papers/Sentiment_Paper.pdf',
  },
  {
    id: 'ercot-dashboard',
    title: 'ERCOT Power Market Dashboard',
    description: 'An interactive dashboard analyzing one year of the Texas (ERCOT) power grid: how weather drives demand, how demand drives wholesale price, and why power prices are so heavily right-skewed. Models the demand-temperature relationship, daily load profiles, and the price duration curve, with an optional live EIA data feed.',
    ownerName: 'Colin Whetstone',
    externalUrl: 'https://colinwhetstone.github.io/ercot-dashboard/',
    tags: ['Energy Markets', 'ERCOT', 'Data Visualization', 'Python', 'Time Series'],
    status: 'Completed',
  },
  {
    id: 'risk-expedition',
    title: 'Risk Expedition',
    description: 'A quantitative research platform focused on risk modeling, simulation design, and portfolio analysis.',
    ownerName: 'Dax Uhrie',
    externalUrl: 'https://risk-expedition.example.com',
    tags: ['Risk Management', 'Portfolio Optimization', 'Quantitative Analysis'],
    status: 'Under Development',
  },
];
