import TextReveal from '@/components/ui/text-reveal';

export default function StylePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Design System</h1>
                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-md border bg-primary-50">
                            <div className="h-10 rounded mb-2 bg-primary-700" />
                            <div className="text-sm text-gray-700">Primary 700</div>
                        </div>
                        <div className="p-4 rounded-md border bg-gray-50">
                            <div className="h-10 rounded mb-2 bg-gray-200" />
                            <div className="text-sm text-gray-700">Neutral</div>
                        </div>
                        <div className="p-4 rounded-md border bg-green-50">
                            <div className="h-10 rounded mb-2 bg-green-500" />
                            <div className="text-sm text-gray-700">Success</div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-xl font-semibold mb-4">Typography</h2>
                    <div className="prose">
                        <h1>H1 — Headline</h1>
                        <h2>H2 — Section</h2>
                        <h3>H3 — Subsection</h3>
                        <p>Body copy should be legible with comfortable line-height and spacing.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Components</h2>
                    <div className="space-y-4">
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md">Primary Button</button>
                        <button className="px-4 py-2 border border-primary-700 text-primary-700 rounded-md">Outline</button>
                        <div className="p-6 bg-white rounded-md shadow-sm">Card Example</div>
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-xl font-semibold mb-4">Text Reveal (Demo)</h2>
                    <div className="max-w-3xl">
                        {/* @ts-ignore - Client component in server component */}
                        <TextReveal word="Cinematic Reveal" />
                    </div>
                </section>
            </div>
        </div>
    )
}
