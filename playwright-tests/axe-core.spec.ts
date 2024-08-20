/* eslint-disable no-console */
import { test } from '@playwright/test';
import AxePuppeteer from '@axe-core/playwright';
import { writeFileSync } from 'fs';

test('ContrastTest', async ({ page }) => {
  await page.goto('/');

  const results = await new AxePuppeteer({ page } as any).analyze();

  const contrastViolations = results.violations.filter((violation) => violation.id === 'color-contrast');

  writeFileSync('playwright-tests-results/playwright-contrast-test.json', JSON.stringify(contrastViolations, null, 2));
});
