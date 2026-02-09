import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center">
                    <p className="text-gray-600">
                        © {currentYear} Quant Finance Collective at Texas State University
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Projects listed on this site are independently developed and maintained by their respective authors.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;