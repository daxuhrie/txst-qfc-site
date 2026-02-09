const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
    const urls = ['/', '/about', '/projects'];
    const widths = [375, 768, 1024, 1440];
    const outDir = path.join(process.cwd(), 'screenshots');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (const url of urls) {
        for (const w of widths) {
            const viewport = { width: w, height: 900 };
            await page.setViewportSize(viewport);
            const full = `http://localhost:3000${url}`;
            try {
                await page.goto(full, { waitUntil: 'networkidle' });
                const name = url === '/' ? 'home' : url.replace(/\//g, '') || 'page';
                const file = path.join(outDir, `${name}-${w}.png`);
                await page.screenshot({ path: file, fullPage: true });
                console.log('Saved', file);
            } catch (err) {
                console.warn('Failed to screenshot', full, err.message);
            }
        }
    }

    await browser.close();
})();