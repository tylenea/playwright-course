import { expect, Page} from "@playwright/test";

class CartComponent{
constructor( private page: Page) {}
 async addToCart(productName: string){
    await this.page.locator(`[data-test="add-to-cart-sauce-labs-${productName}"]`).click();
    await this.page.locator('[data-test="shopping-cart-link"]').click();
 }
 async checkout(){
    await this.page.locator('[data-test="checkout"]').click();
 }}
 export {CartComponent}