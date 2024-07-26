import { expect, Page} from "@playwright/test";

class ProductDetails{
constructor( private page: Page) {}
    async FillForm (){
        await this.page.locator('[data-test="firstName"]').click();
  await this.page.locator('[data-test="firstName"]').fill('tylenea');
  await this.page.locator('[data-test="lastName"]').click();
  await this.page.locator('[data-test="lastName"]').fill('test');
  await this.page.locator('[data-test="postalCode"]').click();
  await this.page.locator('[data-test="postalCode"]').fill('555');
    }
    async Continue (){
        await this.page.locator('[data-test="continue"]').click();
    }
    
}
export {ProductDetails}