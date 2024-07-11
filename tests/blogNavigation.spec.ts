import { test, expect } from '@playwright/test';

test('blog url and title', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await expect(page).toHaveURL(/ilarionhalushka/)
  await expect(page).toHaveTitle(/IT Blog by Ilarion Halushka/)
  });


 test('check if search input is visible, editable, enable', async ({ page }) => {
    await page.goto('https://ilarionhalushka.github.io/');
    await expect.soft(page).toHaveURL(/ilarionhalushkaaaaa/)
    await expect(page).toHaveTitle(/IT Blog by Ilarion Halushka/)
    await expect(page.getByLabel('search...')).toBeVisible();
    await expect(page.getByLabel('search...')).toBeEnabled();
    await expect(page.getByLabel('search...')).toBeEditable();
        
    });

test('Navigation to about author page', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole('button').and(page.getByText('About me')).click();
  await expect(page).toHaveURL(/about/);
  await expect(page).toHaveTitle("About author | IT Blog by Ilarion Halushka");
  await expect(page.locator('.back-to-articles-btn')).toHaveText("<- Back to the list of articles")
});


test('Navigation to Home page from About author page', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole('button').and(page.getByText('About me')).click();
  await page.getByRole('button', {name: "Home"}).click();
  await expect(page).not.toHaveURL(/about/);
  await expect(page).not.toHaveTitle("About author | IT Blog by Ilarion Halushka");
  await expect(page).toHaveURL(/ilarionhalushka/);
  await expect(page).toHaveTitle(/IT Blog by Ilarion Halushka/);

 

// await page.getByLabel('search...').click();
 // await page.getByRole('button', {name: 'Home'}).click(); 
 // await page.getByLabel('search...').click();
 // await page.getByLabel('search...').fill('skill');
 //  await page.getByRole('heading', { name: 'Preconditions 🔗' }).getByRole('link').click();
//  await page.getByRole('heading', { name: 'Conclusion 🔗' }).getByRole('link').click();
//  await page.getByRole('button', { name: '<- Back to the list of articles' }).click();
// execute js
    //await page.evaluate(() =>{
   //   for (let i = 0; i < 100; i++) {
    //    (
    //    document.querySelector("input.form-control.search") as HTMLInputElement
     //   ).value =
     //   "SEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_INPUTSEARCH_IN";}
  //  });
  //  await page
//   .locator('.posts-list')
//   .filter({ hasText: 'How I Failed At Amazon Interview Because of LP' })
//   .locator('a')
//   .filter({hasText:'How I Failed At Amazon Interview Because of LP'})
//   .click();

 // await expect(page
  //  .locator('.posts-list').first().locator('a'))
   // .toHaveText(['How To Choose Between Multiple Job Offers',
   //               'Do Not EVER Accept The Counter Offer',
    //              'How To Make Developers Perform',
 //                 'Soft Skills of Senior Engineer']);
//    await page.pause();
 // await expect(page.locator('.posts-list').last().locator('a')).toHaveCount(30);
//  await page
 // .locator('.posts-list')
//  .filter({ hasText: 'How I Failed At Amazon Interview Because of LP' })
//  .locator('a')
//  .filter({hasText:'How I Failed At Amazon Interview Because of LP'})
//  .click();
//  const page1Promise = page.waitForEvent('popup');
//  await page.getByRole('link', { name: 'How To Choose Between' }).first().click();
//  const page1 = await page1Promise;
});