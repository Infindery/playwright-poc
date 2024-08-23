import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({
    width: 1920,
    height: 1080,
  });
});

test.describe('VisualTests', () => {
	test('Initial', async ({ page }) => {
		await expect(page).toHaveScreenshot('fullpage.png', { fullPage: true });
  });
});