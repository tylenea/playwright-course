import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})

test('top navigation to the Our story', async ({ page }) => {  
  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  
  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
  
});

test('top navigation to Contact', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  
  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
  
});

test('top navigation to Products', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  
  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
  await expect(page.getByText('The animal friendly clothing')).toBeVisible();
  
});

test('top navigation to Products when click on logo', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('link', { name: 'Fur', exact: true }).click();
  
  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});