const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  const info = await page.evaluate(() => {
    const getStyle = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName,
        writingMode: cs.getPropertyValue('writing-mode'),
        whiteSpace: cs.getPropertyValue('white-space'),
        wordBreak: cs.getPropertyValue('word-break'),
        overflowWrap: cs.getPropertyValue('overflow-wrap'),
        letterSpacing: cs.getPropertyValue('letter-spacing'),
        width: el.clientWidth,
        display: cs.getPropertyValue('display')
      };
    };
    return {
      html: getStyle(document.documentElement),
      body: getStyle(document.body),
      main: getStyle(document.querySelector('main')),
      nav: getStyle(document.querySelector('nav')),
      hero: getStyle(document.querySelector('.hero-panel')),
      firstHeading: getStyle(document.querySelector('h1'))
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();