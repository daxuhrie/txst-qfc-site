export default function EventsPage() {
    const events = [
        {
            title: 'Portfolio Optimization Workshop',
            date: 'February 21, 2024',
            time: '6:00 PM - 8:00 PM',
            location: 'Business Building Room 201',
            description: 'Learn modern portfolio theory and optimization techniques using Python.',
            type: 'Workshop',
        },
        {
            title: 'Industry Networking Night',
            date: 'February 28, 2024',
            time: '7:00 PM - 9:00 PM',
            location: 'Student Center Ballroom',
            description: 'Connect with finance professionals and alumni from leading firms.',
            type: 'Networking',
        },
        {
            title: 'Options Trading Seminar',
            date: 'March 7, 2024',
            time: '5:30 PM - 7:30 PM',
            location: 'Business Building Room 301',
            description: 'Introduction to options pricing models and trading strategies.',
            type: 'Seminar',
        },
        {
            title: 'Machine Learning in Finance',
            date: 'March 14, 2024',
            time: '6:00 PM - 8:00 PM',
            location: 'Business Building Room 201',
            description: 'Explore applications of machine learning in quantitative finance.',
            type: 'Workshop',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
                    <p className="text-lg text-gray-600">
                        Join us for workshops, seminars, and networking opportunities to advance your quantitative finance knowledge.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                                <span className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
                                    {event.type}
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4">{event.description}</p>
                            <div className="space-y-2 text-sm text-gray-500">
                                <p><strong>Date:</strong> {event.date}</p>
                                <p><strong>Time:</strong> {event.time}</p>
                                <p><strong>Location:</strong> {event.location}</p>
                            </div>
                            <button className="mt-4 w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors">
                                RSVP
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        Want to stay updated on our events? Join our mailing list or follow us on social media.
                    </p>
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                        Join Mailing List
                    </button>
                </div>
            </div>
        </div>
    );
}