import { test, expect, Page } from '@playwright/test';
import { ProductDetailsComponent } from '../../components/ProductDetailsComponent';

let page: Page;

test.beforeAll( async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  
});

test('Sacha the Deer product details', async ({ }) => {
const {getHeading} = new ProductDetailsComponent(page);
  await getHeading('Sacha the Deer Sacha’s').first().click();

 const {getButton}= new ProductDetailsComponent(page);
  await getButton;
 
const {ProductDetailAsserion} = new ProductDetailsComponent(page);
  await ProductDetailAsserion({
    title:'Sacha the Deer Sacha’s',
    description:'Slim Fit, 5oz 100% Cotton T-'
 });
//const colorPicker = new ProductDetailsComponent(page);
//await colorPicker.colorClick(1); 
//await colorPicker.colorClick(2);
 //await colorPicker.colorClick(3);
// await colorPicker.colorClick(4);
//await colorPicker.colorAssertion(1);
// await colorPicker.colorAssertion(2);
// await colorPicker.colorAssertion(3);
// await colorPicker.colorAssertion(4);
});

test('Bumble the Elephant product details', async ({}) => {
  const {getHeading} = new ProductDetailsComponent(page);
  await getHeading('Bumble the Elephant').first().click();

 const {getButton}= new ProductDetailsComponent(page);
  await getButton;
  
  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div').first().click();

const {ProductDetailAsserion} = new ProductDetailsComponent(page);
  await ProductDetailAsserion({
    title:'Bumble the Elephant Bumble',
    description:'Bumble the humble elephant'
 });

  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('.style-picker > div').first()).toBeVisible();
});

test('Gerald the Giraffe product details', async ({}) => {
  const {getHeading} = new ProductDetailsComponent(page);
  await getHeading('Gerald the Giraffe ').first().click();

 const {getButton}= new ProductDetailsComponent(page);
  await getButton;
 
const {ProductDetailAsserion} = new ProductDetailsComponent(page);
  await ProductDetailAsserion({
    title:'Gerald the Giraffe Gerald',
    description:'Gerald the giraffe isn’t'
 });
    
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div')).toBeVisible();
});

test('Todd the Hedgehog product details', async ({}) => {
 
  const {getHeading} = new ProductDetailsComponent(page);
  await getHeading('Todd the Hedgehog').first().click();

  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div:nth-child(3)').click();
  await page.locator('.style-picker > div').first().click();
 
  const {getButton}= new ProductDetailsComponent(page);
  await getButton;
 
const {ProductDetailAsserion} = new ProductDetailsComponent(page);
  await ProductDetailAsserion({
    title:'Todd the Hedgehog Todd',
    description:'Todd the hedgehog may have a'
 });
  
});

test('Scar the Lion product details', async ({}) => {
  const {getHeading} = new ProductDetailsComponent(page);
  await getHeading('Scar the Lion').first().click();

 const {getButton}= new ProductDetailsComponent(page);
  await getButton;
 
  await page.locator('section').filter({ hasText: 'Scar the Lion Scar the lion' }).click();

  const {ProductDetailAsserion} = new ProductDetailsComponent(page);
  await ProductDetailAsserion({
    title:'Scar the Lion Scar',
    description:'Scar the lion is always true'
 });
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div')).toBeVisible();  
});

test('Gavin the Tiger product details', async ({}) => {
  const {getHeading} = new ProductDetailsComponent(page);
  await getHeading('Gavin the Tiger Gavin').first().click();

 const {getButton}= new ProductDetailsComponent(page);
  await getButton;
 
const {ProductDetailAsserion} = new ProductDetailsComponent(page);
  await ProductDetailAsserion({
    title:'Gavin the tiger Gavin',
    description:'Gavin the tiger was brought'
 });
  await page.locator('.style-picker > div:nth-child(2)').click();
  await page.locator('.style-picker > div:nth-child(3)').click();
  await page.locator('.style-picker > div:nth-child(4)').click();
  await page.locator('.style-picker > div:nth-child(5)').click();
  await page.locator('.style-picker > div').first().click();
  await page.locator('section').filter({ hasText: 'Gavin the Tiger Gavin the' }).click();
  
  await expect(page.locator('.styles')).toBeVisible();
  await expect(page.locator('.style-picker > div').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(3)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(4)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(5)')).toBeVisible();



});