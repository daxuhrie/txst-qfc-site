import React from 'react';

const GetInvolved: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Involved</h2>
                    <p className="text-lg text-gray-600">
                        Join our community and participate in quantitative finance activities.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Weekly Meetings</h3>
                        <p className="text-gray-700 mb-4">
                            We hold regular meetings every Wednesday at 6:00 PM in the Business Building, Room 201.
                            Meetings include workshops, presentations, and networking opportunities.
                        </p>
                        <div className="bg-primary-50 p-4 rounded-md">
                            <h4 className="font-semibold text-primary-900 mb-2">Next Meeting</h4>
                            <p className="text-primary-800">
                                February 14, 2024 - Introduction to Options Pricing Models
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 mb-4">
                            Interested in joining? Contact our officers or sign up for our mailing list to stay updated.
                        </p>
                        <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                            Contact Officers
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;