import About from '../../components/About';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
                <p className="text-sm text-gray-500 mb-6">Design system: <a href="/style" className="text-primary-600 hover:underline">Style guide</a></p>
                <About />
            </div>
        </div>
    );
}
