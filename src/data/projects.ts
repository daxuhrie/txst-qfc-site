export interface Project {
    id: string;
    title: string;
    description: string;
    ownerName: string;
    externalUrl: string;
    tags: string[];
    status: 'Active' | 'Completed' | 'In Development';
}

export const projects: Project[] = [
    {
        id: 'uhrie-risk-lab',
        title: 'Uhrie Risk Lab',
        description: 'A comprehensive risk management platform for quantitative analysis and portfolio optimization.',
        ownerName: 'Dax Uhrie',
        externalUrl: 'https://uhrie-risk-lab.example.com',
        tags: ['Risk Management', 'Portfolio Optimization', 'Quantitative Analysis'],
        status: 'Active',
    },
    {
        id: 'volatility-surface-analyzer',
        title: 'Volatility Surface Analyzer',
        description: 'Tool for analyzing and visualizing volatility surfaces in options markets.',
        ownerName: 'Jane Smith',
        externalUrl: 'https://volatility-analyzer.example.com',
        tags: ['Options', 'Volatility', 'Visualization'],
        status: 'In Development',
    },
    {
        id: 'crypto-portfolio-tracker',
        title: 'Crypto Portfolio Tracker',
        description: 'Real-time tracking and analysis of cryptocurrency portfolios with risk metrics.',
        ownerName: 'John Doe',
        externalUrl: 'https://crypto-tracker.example.com',
        tags: ['Cryptocurrency', 'Portfolio Tracking', 'Risk Metrics'],
        status: 'Active',
    },
    {
        id: 'machine-learning-trading',
        title: 'ML Trading Strategies',
        description: 'Machine learning models for developing and backtesting trading strategies.',
        ownerName: 'Alice Johnson',
        externalUrl: 'https://ml-trading.example.com',
        tags: ['Machine Learning', 'Trading Strategies', 'Backtesting'],
        status: 'Completed',
    },
];