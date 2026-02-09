import { test, expect } from '@playwright/test'

const pages = ['/', '/about', '/projects']
const widths = [375, 768, 1024, 1440]

for (const pagePath of pages) {
  for (const w of widths) {
    test(`visual - ${pagePath} - ${w}px`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 900 })
      await page.goto(pagePath, { waitUntil: 'networkidle' })
      // give home page a bit more time for dynamic content to settle
      if (pagePath === '/') await page.waitForTimeout(1500)
      // Playwright will save the snapshot on first run with --update-snapshots
      await expect(page).toHaveScreenshot(`visual-${pagePath === '/' ? 'home' : pagePath.replace('/', '')}-${w}.png`, { fullPage: true, timeout: 30_000 })
    })
  }
}
