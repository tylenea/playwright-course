import {Page, expect} from "@playwright/test"

class ProductInfoComponent {
    constructor(private page: Page) {
    this.page = page;
    }
NavigaToProduct = async(n: number)=>{
    await this.page.locator(`[data-test="item-${n}-title-link"]`).click();
}
 ProductInfoAssertion =async(ProductName: string)=>{
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(this.page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
  await expect(this.page.locator('[data-test="inventory-item-price"]')).toBeVisible();
  await expect(this.page.locator(`[data-test="item-${ProductName}-img"]`)).toBeVisible();
  await expect(this.page.locator('[data-test="add-to-cart"]')).toBeVisible();
  await expect(this.page.locator('[data-test="back-to-products"]')).toBeVisible();
 }   
 AddToCartButton = async ()=>{
    await this.page.locator('[data-test="add-to-cart"]').click();
    await expect(this.page.locator('[data-test="remove"]')).toBeVisible();
    await this.page.locator('[data-test="remove"]').click();
    await expect(this.page.locator('[data-test="add-to-cart"]')).toBeVisible();
}
 BackToProducts= async()=>{
    await this.page.locator('[data-test="back-to-products"]').click();
}
}
export {ProductInfoComponent}