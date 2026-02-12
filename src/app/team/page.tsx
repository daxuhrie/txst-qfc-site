export default function TeamPage() {
    const officers = [
        {
            name: 'Alex Johnson',
            role: 'President',
            major: 'Finance',
            responsibilities: 'Overall club leadership, strategic planning, and external relations.',
        },
        {
            name: 'Sarah Chen',
            role: 'Vice President',
            major: 'Mathematics',
            responsibilities: 'Event coordination, member engagement, and academic partnerships.',
        },
        {
            name: 'Michael Rodriguez',
            role: 'Events Chair',
            major: 'Economics',
            responsibilities: 'Organizing workshops, seminars, and networking events.',
        },
        {
            name: 'Emily Davis',
            role: 'Treasurer',
            major: 'Business Analytics',
            responsibilities: 'Financial management, budgeting, and sponsorship coordination.',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
                    <p className="text-lg text-gray-600">
                        Meet the dedicated students leading our quantitative finance initiatives.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {officers.map((officer, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-gray-600 font-semibold text-lg">
                                        {officer.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{officer.name}</h3>
                                    <p className="text-primary-600 font-medium">{officer.role}</p>
                                    <p className="text-gray-600">{officer.major}</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                                <p className="text-gray-600">{officer.responsibilities}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                    <p className="text-gray-600 mb-4">
                        Interested in joining the team or have questions? Reach out to our officers.
                    </p>
                    <p className="text-gray-700">
                        Email: <a href="mailto:ygv7@txstate.edu" className="text-primary-600 hover:underline">ygv7@txstate.edu</a>
                    </p>
                </div>
            </div>
        </div>
    );
}