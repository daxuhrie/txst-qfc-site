import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/playwright',
  timeout: 60_000,
  expect: { toHaveScreenshot: { threshold: 0.08, timeout: 30_000 } },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    viewport: { width: 1280, height: 900 },
  },
})
