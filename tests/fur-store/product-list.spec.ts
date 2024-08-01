import { test, expect, Page } from '@playwright/test';
import { ColorPicker, ProductListComponent } from '../../components/ProductListComponent';

let page: Page;
test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
});


test('products list has products with title', async ({}) => {  
  const { getTitle} = new ProductListComponent(page);

  await expect( getTitle( 'Sacha the Deer' )).toBeVisible();
  await expect( getTitle( 'Bumble the Elephant' )).toBeVisible();
  await expect( getTitle( 'Gerald the Giraffe' )).toBeVisible();
  await expect( getTitle( 'Todd the Hedgehog' )).toBeVisible();
  await expect( getTitle( 'Scar the Lion' )).toBeVisible();
  await expect( getTitle( 'Gavin the Tiger' )).toBeVisible();
  
});

test('products list has products with image', async ({}) => {  
  const { getImage} = new ProductListComponent(page);
  await expect(page.locator('.styles').first()).toBeVisible();
  await expect(getImage(2)).toBeVisible();
  await expect(getImage(3)).toBeVisible();
  await expect(getImage(4)).toBeVisible();
  await expect(getImage(5)).toBeVisible();
});

test('products list has products with price', async ({}) => {  
  const { getPrice} = new ProductListComponent(page);
  await expect(getPrice ('Sacha the Deer' )).toBeVisible();
  await expect(getPrice ('Bumble the Elephant Bumble' )).toBeVisible();
  await expect(getPrice ('Gerald the Giraffe Gerald the' )).toBeVisible();
  await expect(getPrice ('Todd the Hedgehog Todd the' )).toBeVisible();
  await expect(getPrice ('Scar the Lion Scar the lion' )).toBeVisible();
  await expect(getPrice ('Gavin the Tiger Gavin the' )).toBeVisible();
});

test('color picker Sacha the Deer', async ({}) => {  
 const color_picker = new ColorPicker(page);
 const {HeadingLink} = new ColorPicker(page);
 const {colorAssert} = new ColorPicker(page);
  await color_picker.colorClick(1);
  await color_picker.colorClick(2);
  await color_picker.colorClick(3);
  await color_picker.colorClick(4);
  
  //await page.locator('.style-picker > div').first().click();
 // await page.locator('.style-picker > div:nth-child(2)').first().click();
 // await page.locator('.style-picker > div:nth-child(3)').first().click();
 // await page.locator('.style-picker > div:nth-child(4)').first().click();
 //await expect( HeadingLink( 'Sacha the Deer' )).toBeVisible();
 await HeadingLink("Sacha the Deer Sacha’s");
 await colorAssert(1);
 await colorAssert(2);
 await colorAssert(3);
 await colorAssert(4);
});

test('color picker Bumble the Elephant', async ({ page }) => {
  const color_picker = new ColorPicker(page);
 const {HeadingLink} = new ColorPicker(page);
 const {colorAssert} = new ColorPicker(page);
 await color_picker.colorClick(1);
 await color_picker.colorClick(2);
 
 await HeadingLink("Bumble the Elephant Bumble");
 await colorAssert(1);
 await colorAssert(2);
});

test('color picker Gerald the Giraffe', async ({ page }) => {
 const color_picker = new ColorPicker(page);
 const {HeadingLink} = new ColorPicker(page);
 const {colorAssert} = new ColorPicker(page);
 await color_picker.colorClick(1);
 
 await HeadingLink("Gerald the Giraffe Gerald the");
 await colorAssert(1);
});

test('color picker Todd the Hedgehog', async ({ page }) => {
 const color_picker = new ColorPicker(page);
 const {HeadingLink} = new ColorPicker(page);
 const {colorAssert} = new ColorPicker(page);
 await color_picker.colorClick(1);
 await color_picker.colorClick(2);
 await color_picker.colorClick(3);
 await HeadingLink("Todd the Hedgehog Todd the");
 await colorAssert(1);
 await colorAssert(2);
 await colorAssert(3);
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