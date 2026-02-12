export interface Project {
    id: string;
    title: string;
    description: string;
    ownerName: string;
    externalUrl: string;
    tags: string[];
    status: 'Active' | 'Completed' | 'In Development' | 'Under Development';
}

export const projects: Project[] = [
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