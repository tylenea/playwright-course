import { test, expect } from '@playwright/test';

let page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/');
});

test('Check that our story has heading', async ({}) => {
  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
});

test('Our story page has avatars of founders', async ({}) => {

  await expect(page.locator('li')
  .filter({ hasText: 'Ava Sandler' })
  .locator('div').first())
  .toBeVisible();await expect(page.getByText('Ava Sandler')).toBeVisible();
  
  await expect(page.locator('li')
  .filter({ hasText: 'Steph Poco' })
  .locator('div').first())
  .toBeVisible();
  await expect(page.getByText('Steph Poco')).toBeVisible();
});

test('Our story page has motivation paraghaps', async ({}) => {

  await expect(page.getByRole('heading', { name: 'Passion' })).toBeVisible();
  await expect(page.getByText('What more could you want from')).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Animal' })).toBeVisible();
  await expect(page.getByText('It\'s easy to forget that we\'')).toBeVisible();
    
  await expect(page.getByRole('heading', { name: 'Style' })).toBeVisible();
   await expect(page.getByText('We like to keep things plain')).toBeVisible();
});

