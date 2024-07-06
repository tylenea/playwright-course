import { test, expect } from '@playwright/test';

test('blogNavigation', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByLabel('search...').click();

  
    // execute js
    await page.evaluate(() =>{
      for (let i = 0; i < 100; i++) {
        (
        document.querySelector("input.form-control.search") as HTMLInputElement
        ).value =
        "SEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_IN";}
    });
  

  await expect(page
    .locator('.posts-list').first().locator('a'))
    .toHaveText(['How To Choose Between Multiple Job Offers',
                  'Do Not EVER Accept The Counter Offer',
                  'How To Make Developers Perform',
                  'Soft Skills of Senior Engineer']);
    await page.pause();
  await expect(page.locator('.posts-list').last().locator('a')).toHaveCount(30);
  
  await page.getByRole('button').and(page.getByText('About me')).click();
  await page
  .locator('.posts-list')
  .filter({ hasText: 'How I Failed At Amazon Interview Because of LP' })
  .locator('a')
  .filter({hasText:'How I Failed At Amazon Interview Because of LP'})
  .click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'How To Choose Between' }).first().click();
  const page1 = await page1Promise;
  await page.getByLabel('search...').click();
  await page.getByLabel('search...').fill('skill');
  const page2Promise = page.waitForEvent('popup');
  await page.getByLabel('search...').press('Enter');
  const page2 = await page2Promise;
  await page.getByRole('link', { name: 'HR Interview Questions' }).click();
  await page.getByRole('heading', { name: 'Ambitions 🔗' }).getByRole('link').click();
  await page.getByRole('heading', { name: 'Motivation 🔗' }).getByRole('link').click();
  await page.getByRole('button', { name: 'About me' }).click();
});