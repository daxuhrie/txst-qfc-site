"use client"

import React from "react"

export interface StardustButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    className?: string
}

export const StardustButton: React.FC<StardustButtonProps> = ({
    children = "Launching Soon",
    onClick,
    className = "",
    ...props
}) => {
    // Simplified, restrained button style to match the academic, dark theme
    const baseStyle: React.CSSProperties = {
        outline: 'none',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'transform .18s ease, filter .18s ease, box-shadow .18s ease',
        border: '1px solid rgba(255,255,255,0.06)',
        background: 'transparent',
        padding: '10px 16px',
        color: 'rgb(var(--foreground-rgb))',
    }

    const primaryStyle: React.CSSProperties = {
        background: 'rgb(var(--accent-rgb))',
        color: 'rgb(var(--foreground-rgb))',
        border: '1px solid rgba(0,0,0,0.45)'
    }

    const hoverStyle: React.CSSProperties = {
        transform: 'translateY(-2px)',
        filter: 'brightness(1.03)'
    }

    // choose the final style based on className or prop intent
    const finalStyle: React.CSSProperties = {
        ...baseStyle,
        ...(className.includes('primary') ? primaryStyle : {}),
    }

    const pStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        margin: 0,
        fontSize: '14px',
        fontWeight: 600,
    }

    return (
        <button
            className={`pearl-button ${className}`}
            style={finalStyle}
            onClick={onClick}
            {...props}
        >
            <div style={pStyle}>
                {children}
            </div>
        </button>
    )
}
