import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({
    width: 1920,
    height: 1080,
  });
});

test.describe('AccessibilityTests', () => {
  test('AltTests', async ({ page }) => {
    await expect(page.getByTestId('header-logo')).toHaveAttribute('alt', 'Логотип московского зоопарка');
    await expect(page.getByTestId('hero-image')).toHaveAttribute('alt', 'Изображение панды');
    await expect(page.getByTestId('footer-logo')).toHaveAttribute('alt', 'Зоопарк работает при поддержке департамента культуры города Москвы');

    await expect(page.getByTestId('cards-image').nth(0)).toHaveAttribute('alt', 'Изображение рыбы');
    await expect(page.getByTestId('cards-image').nth(1)).toHaveAttribute('alt', 'Изображение аллигатора');
    await expect(page.getByTestId('cards-image').nth(2)).toHaveAttribute('alt', 'Изображение медведя');
    await expect(page.getByTestId('cards-image').nth(3)).toHaveAttribute('alt', 'Изображение быка');
  });

  test('TitleTests', async ({ page }) => {
    await expect(page.getByTestId('hero-abbr').nth(0)).toHaveAttribute('title', 'World Wildlife Fund');
    await page.getByTitle('Программа по Восстановлению Популяций');
    await expect(page.getByText('МПОЖ')).toHaveAttribute('title', 'Международная Программа Обмена Животных');
  });

  test('LabelTests', async ({ page }) => {
    await page.getByTestId('form-label-name').isVisible();
    await page.getByTestId('form-label-name').click();
    await expect(page.getByTestId('form-input-name')).toBeFocused();
    await page.screenshot({ path: 'playwright-tests-results/initial-tests/labels-page-screenshot.png' });
  });

  test('PlaceholderTests', async ({ page }) => {
    await page.getByPlaceholder('Имя');
    await page.getByPlaceholder('Количество билетов').fill('10');
    await page.getByPlaceholder('Количество билетов').screenshot({ path: 'playwright-tests-results/initial-tests/element-screenshot.png' });
    await page.screenshot({ path: 'playwright-tests-results/initial-tests/placeholders-page-screenshot.png' });
  });

  test('AriaAttrsTests', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Введите ваше имя' }).isVisible();
    await page.getByRole('textbox', { name: 'Введите количество необходимых билетов' }).isVisible();
    await page.getByRole('textbox', { name: 'Введите ваш номер телефона' }).isVisible();
  });

  test('TabTests', async ({ page }) => {
    const expectedTabOrder = [
      'quick-navigation-item',
      'quick-navigation-item',
      'quick-navigation-item',
      'header-logo-link',
      'header-list-item',
      'header-list-item',
      'header-list-item',
      'header-button',
      'hero-title',
      'hero-description',
      'cards-card',
      'cards-card',
      'cards-card',
      'cards-card',
      'form-title',
      'form-input-name',
      'form-input-count-tickets',
      'form-input-number',
      'form-checkbox',
      'form-button',
      'footer-logo',
      'footer-link',
      'footer-link',
      'footer-email',
    ];

    for (const element of expectedTabOrder) {
      await page.keyboard.press('Tab');
      await page.waitForTimeout(500);
      await expect(page.locator(':focus')).toHaveAttribute('data-pw', `${element}`);
    }
  });
});
