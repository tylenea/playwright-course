import{ Page, expect } from "@playwright/test";

class ProductListComponent {
    constructor (private page: Page) {
     this.page = page;
}
getTitle = async(n:number)=>{
    await expect(this.page.locator(`[data-test="item-${n}-title-link"]`)).toBeVisible();
}
getImage = async(n:number)=>{
    await expect(this.page.locator(`[data-test="item-${n}-img-link"]`)).toBeVisible();
}
async getPrice (){
    await expect(this.page.getByText('$29.99')).toBeVisible();
    await expect(this.page.getByText('$9.99')).toBeVisible();
    await expect(this.page.getByText('$15.99').first()).toBeVisible();
    await expect(this.page.getByText('$49.99')).toBeVisible();
    await expect(this.page.getByText('$7.99')).toBeVisible();
    await expect(this.page.getByText('$15.99').nth(1)).toBeVisible();}
 
AddToCartButton =  async (title: 'backpack' | 'bike-light' | 'bolt-t-shirt'| 'fleece-jacket'| 'onesie')=>{
    await this.page.locator(`[data-test="add-to-cart-sauce-labs-${title}"]`).click();
   // await this.page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
} 
getAddToCartButton= async (title: 'backpack' | 'bike-light' | 'bolt-t-shirt'| 'fleece-jacket'| 'onesie' )=>{
    await expect(this.page.locator(`[data-test="add-to-cart-sauce-labs-${title}"]`)).toBeVisible();
    await expect(this.page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toBeVisible();
    }

RemoveButton =  async (title: 'backpack' | 'bike-light' | 'bolt-t-shirt'| 'fleece-jacket'| 'onesie')=>{
    await this.page.locator(`[data-test="remove-sauce-labs-${title}"]`).click();
    
    }
getRemoveButton = async (title: 'backpack' | 'bike-light' | 'bolt-t-shirt'| 'fleece-jacket'| 'onesie')=>{
    await expect(this.page.locator(`[data-test="remove-sauce-labs-${title}"]`)).toBeVisible();
}

}

export {ProductListComponent}