import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-sm opacity-90">
                        © {currentYear} Quant Finance Collective at Texas State University
                    </p>
                    <p className="text-xs opacity-80 mt-2">
                        Projects listed on this site are independently developed and maintained by their respective authors.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;