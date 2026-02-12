import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0e0e10] text-white">
            <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <p className="text-sm font-semibold mb-2">Quant Finance Collective</p>
                        <p className="text-sm muted">Texas State University</p>
                        <p className="text-sm muted mt-2">Room 5242, Roy F. Mitte Building</p>
                        <p className="text-xs muted">Thursdays • 5:00 – 6:00 PM</p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold mb-2">Quick links</p>
                        <ul className="text-sm space-y-1">
                            <li><a className="hover:text-white" href="/about">About</a></li>
                            <li><a className="hover:text-white" href="/leadership">Leadership</a></li>
                            <li><a className="hover:text-white" href="/resources">Resources</a></li>
                            <li><a className="hover:text-white" href="/projects">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold mb-2">Contact</p>
                        <a className="block text-sm opacity-90 hover:opacity-100 mb-1" href="mailto:ygv7@txstate.edu">ygv7@txstate.edu</a>
                        <a className="block text-sm opacity-90 hover:opacity-100 mb-1" href="https://discord.gg/eUSru8tggM" target="_blank" rel="noreferrer">Discord</a>
                        <a className="block text-sm opacity-90 hover:opacity-100 mb-1" href="https://www.instagram.com/qfctxst/" target="_blank" rel="noreferrer">Instagram</a>
                        <a className="block text-sm opacity-90 hover:opacity-100" href="https://www.linkedin.com/company/qfc-at-txst/posts/?feedView=all" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>

                    <div className="text-sm opacity-80">
                        <p className="font-semibold mb-2">Note on projects</p>
                        <p>Projects listed here are independently developed and maintained by their authors. The club shares links for discovery and learning.</p>
                        <p className="mt-3">© {currentYear} Quant Finance Collective at Texas State University</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;