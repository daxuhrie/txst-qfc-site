export default function GovernancePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Ownership & Club Model</h1>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6">
                            The Quant Finance Collective at Texas State University is committed to maintaining clear boundaries between club activities and individual member projects. This page explains our approach to project ownership and the club's role in the community.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Independence</h2>
                        <p className="text-gray-700 mb-6">
                            All projects listed on this website are independently developed, owned, and maintained by their respective authors. The club does not claim ownership of any member-created code, research, or intellectual property. Each project remains the sole responsibility of its creator.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Club's Role</h2>
                        <p className="text-gray-700 mb-6">
                            The Quant Finance Collective at Texas State University serves as a discovery and networking hub for quantitative finance enthusiasts. We provide a platform for members to showcase their work, connect with peers, and collaborate on ideas. However, we do not host, maintain, or endorse any specific projects.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">External Hosting</h2>
                        <p className="text-gray-700 mb-6">
                            Member projects are hosted on external platforms chosen by their authors. This ensures that project maintainers retain full control over their work, including deployment, updates, and access management. The club provides links to these external resources for visibility and community building.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Guidelines</h2>
                        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                            <li>Projects must be related to quantitative finance or related technical fields</li>
                            <li>All projects should be appropriate for an academic environment</li>
                            <li>Authors are responsible for the accuracy and quality of their work</li>
                            <li>The club reserves the right to remove links to projects that violate these guidelines</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                        <p className="text-gray-700">
                            If you have questions about our governance model or want to submit a project for inclusion, please contact our officers at{' '}
                            <a href="mailto:ygv7@txstate.edu" className="text-primary-600 hover:underline">ygv7@txstate.edu</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}