import { test, expect } from '@playwright/test';

test('shop navigation', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  await page.getByRole('link', { name: 'Gavin the Tiger' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await page.getByPlaceholder('Enter your name...').click();
  await page.getByPlaceholder('Enter your name...').fill('ds');
  //it will fail here :'( i don't know why)
  await page.getByPlaceholder('Enter your email...').click();
  //we want to fix this
  await page.getByPlaceholder('Enter your email...').fill('fds@gs.fds');
  await page.getByPlaceholder('Enter your message...').click();
  await page.getByPlaceholder('Enter your message...').fill('msg');
  await page.getByRole('button', { name: 'Send Message' }).click();  
});