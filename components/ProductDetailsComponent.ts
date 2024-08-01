import{ Page, expect, Locator } from "@playwright/test";

class ProductDetailsComponent {
    constructor (private page: Page) {
     this.page = page;
};
getHeading = (title: string)=>{
    return this.page
    .locator('li')
    .filter({ hasText: title })
    .getByRole('link')
}


//  async colorClick(n: number){
//    await this.page.locator('div:nth-child(" + n +">).style-picker').click();
 // }
//  async colorAssertion(n: number){
//    await expect(this.page.locator('div:nth-child(" + n +">).style-picker')).toBeVisible();
//  };

async getButton (){ 
this.page.getByRole('button', { name: 'Add to cart' }).click();
this.page.getByRole('button', { name: 'Remove item' }).first().click();      
}
ProductDetailAsserion = async ({
        description,        
    } : {
    description: string,
    })=>{
  await expect(this.page.getByText(description)).toBeVisible();
  await expect(this.page.locator('h3')).toBeVisible();  
  await expect(this.page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(this.page.getByRole('heading', { name: '$' })).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await expect(this.page.locator('.styles')).toBeVisible();
  
}
}
export {ProductDetailsComponent}