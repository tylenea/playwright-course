import { test, expect } from '@playwright/test';
let page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  
});

test('Sacha the Deer product details', async ({ }) => {
  await page.locator('li').filter({ hasText: 'Sacha the Deer Sacha’s' }).getByRole('link').first().click();
  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div:nth-child(3)').click();
  await page.locator('.style-picker > div:nth-child(4)').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Remove item' }).first().click();
  
  await expect(page.getByText('Sacha’s elegant antlers have')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('h3')).toBeVisible();
  await expect(page.locator('.style-picker > div').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(3)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(4)')).toBeVisible();
});

test('Bumble the Elephant product details', async ({}) => {
  await page.locator('li').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('link').first().click();
  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('section').filter({ hasText: 'Bumble the Elephant Bumble' }).click();

  await expect(page.locator('h3')).toBeVisible();
  await expect(page.getByText('Bumble the humble elephant is')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('.style-picker > div').first()).toBeVisible();
});

test('Gerald the Giraffe product details', async ({}) => {
   
  await page.getByRole('link', { name: 'Gerald the Giraffe' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Remove item' }).first().click();

  await expect(page.locator('h3')).toBeVisible();
  await expect(page.getByText('Gerald the giraffe isn’t')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div')).toBeVisible();
});

test('Todd the Hedgehog product details', async ({}) => {
  await page.getByRole('link', { name: 'Todd the Hedgehog' }).click();
  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div:nth-child(3)').click();
  await page.locator('.style-picker > div').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Remove item' }).first().click();

  await expect(page.locator('h3')).toBeVisible();
  await expect(page.getByText('Todd the hedgehog may have a')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
});

test('Scar the Lion product details', async ({}) => {

  await page.locator('li').filter({ hasText: 'Scar the Lion Scar the lion' }).getByRole('link').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('section').filter({ hasText: 'Scar the Lion Scar the lion' }).click();

  await expect(page.locator('h3')).toBeVisible();
  await expect(page.getByText('Scar the lion is always true')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div')).toBeVisible();  
});

test('Gavin the Tiger product details', async ({}) => {
  await page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('link').first().click();
  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div:nth-child(3)').click();
  await page.locator('.style-picker > div:nth-child(4)').click();
  await page.locator('.style-picker > div:nth-child(5)').click();
  await page.locator('.style-picker > div').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.locator('section').filter({ hasText: 'Gavin the Tiger Gavin the' }).click();
  
  await expect(page.locator('h3')).toBeVisible();
  await expect(page.getByText('Gavin the tiger was brought')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(3)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(4)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(5)')).toBeVisible();
});