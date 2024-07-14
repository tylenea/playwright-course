import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})

test('products list has products with title', async ({ page }) => {  
  await expect(page.getByRole('link', { name: 'Sacha the Deer' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bumble the Elephant' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gerald the Giraffe' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Todd the Hedgehog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Scar the Lion' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gavin the Tiger' })).toBeVisible();
  
});

test('products list has products with image', async ({ page }) => {  
  await expect(page.locator('.styles').first()).toBeVisible();
  await expect(page.locator('li:nth-child(2) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(3) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(4) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(5) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(6) > .styles')).toBeVisible();
});

test('products list has products with price', async ({ page }) => {  
  
  await expect(page.locator('li').filter({ hasText: 'Sacha the Deer Sacha’s' }).getByRole('paragraph').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('paragraph').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gerald the Giraffe Gerald the' }).getByRole('paragraph').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Todd the Hedgehog Todd the' }).getByRole('paragraph').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Scar the Lion Scar the lion' }).getByRole('paragraph').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('paragraph').nth(1)).toBeVisible();
});

test('color picker Sacha the Deer', async ({ page }) => {  

  await page.locator('.style-picker > div').first().click();
  await page.locator('.style-picker > div:nth-child(2)').first().click();
  await page.locator('.style-picker > div:nth-child(3)').first().click();
  await page.locator('.style-picker > div:nth-child(4)').first().click();

  await expect(page.locator('li')
  .filter({ hasText: 'Sacha the Deer Sacha’s' })
  .getByRole('link').first())
  .toBeVisible();

  await expect(page.locator('.style-picker > div').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(3)').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(4)').first()).toBeVisible();
});

test('color picker Bumble the Elephant', async ({ page }) => {
  await page.locator('div:nth-child(3) > div').first().click();
  await page.locator('div:nth-child(3) > div:nth-child(2)').click();
  await page.locator('div:nth-child(3) > div').first().click();

  await expect(page.locator('li')
  .filter({ hasText: 'Bumble the Elephant Bumble' })
  .getByRole('link').first()).
  toBeVisible();
  await expect(page.locator('div:nth-child(3) > div').first()).toBeVisible();
  await expect(page.locator('div:nth-child(3) > div:nth-child(2)')).toBeVisible();
});

test('color picker Gerald the Giraffe', async ({ page }) => {
  await page.locator('li:nth-child(3) > .styles > .style-picker > div').click();

  await expect(page.locator('li')
  .filter({ hasText: 'Gerald the Giraffe Gerald the' })
  .getByRole('link').first())
  .toBeVisible();
   expect(page.locator('li:nth-child(3) > .styles > .style-picker > div')).toBeVisible();
});

test('color picker Todd the Hedgehog', async ({ page }) => {

  await page.locator('div:nth-child(4) > div:nth-child(2)').click();
  await page.locator('div:nth-child(4) > div:nth-child(3)').click();
  await page.locator('div:nth-child(4) > div').first().click();

  await expect(page.locator('li')
  .filter({ hasText: 'Todd the Hedgehog Todd the' })
  .getByRole('link').first()).
  toBeVisible();
  await expect(page.locator('div:nth-child(4) > div').first()).toBeVisible();
  await expect(page.locator('div:nth-child(4) > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('div:nth-child(4) > div:nth-child(3)')).toBeVisible();
});

test('color picker Scar the Lion', async ({ page }) => {
  await page.locator('li:nth-child(5) > .styles > .style-picker > div').click();

  await expect(page.locator('li')
  .filter({ hasText: 'Scar the Lion Scar the lion' })
  .getByRole('link').first())
  .toBeVisible();
  await expect(page.locator('li:nth-child(5) > .styles > .style-picker > div')).toBeVisible();
});

test('color picker Gavin the Tiger Gavin the', async ({ page }) => {
  await page.locator('div:nth-child(6) > div').first().click();
  await page.locator('div:nth-child(6) > div:nth-child(2)').click();
  await page.locator('div:nth-child(6) > div:nth-child(3)').click();
  await page.locator('div:nth-child(6) > div:nth-child(4)').click();
  await page.locator('.style-picker > div:nth-child(5)').click();
  await page.locator('div:nth-child(6) > div').first().click();

  await expect(page.locator('li')
  .filter({ hasText: 'Gavin the Tiger Gavin the' })
  .getByRole('link').first())
  .toBeVisible();
  await expect(page.locator('div:nth-child(6) > div').first()).toBeVisible();
  await expect(page.locator('div:nth-child(6) > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('div:nth-child(6) > div:nth-child(3)')).toBeVisible();
  await expect(page.locator('div:nth-child(6) > div:nth-child(4)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(5)')).toBeVisible();


});

//to do color picker