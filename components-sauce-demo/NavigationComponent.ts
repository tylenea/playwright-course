import {Page, expect} from "@playwright/test"

class NavigationComponent {
    constructor(private page: Page) {
    this.page = page;
    }

Menubutton = async (button: 'Open Menu' | "Close Menu")=>{
    await this.page.getByRole('button', { name: button }).click();
}

async SideBarAssertion(){
    await expect(this.page.locator('[data-test="inventory-sidebar-link"]')).toBeVisible();
await expect(this.page.locator('[data-test="about-sidebar-link"]')).toBeVisible();
await expect(this.page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
await expect(this.page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
await expect(this.page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
await expect(this.page.getByRole('button', { name: 'Close Menu' })).toBeVisible();
}
async TopNavigationAssertion(){
    await expect(this.page.getByText('Swag Labs')).toBeVisible();
    await expect(this.page.locator('[data-test="product-sort-container"]')).toBeVisible();
    await expect(this.page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
}
 ProductFilter = async()=>{
await this.page.locator('[data-test="secondary-header"]').click();
  await this.page.getByText('Name (A to Z)Name (A to Z)').click();
  await this.page.locator('[data-test="secondary-header"]').click();
  await this.page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await this.page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await this.page.locator('[data-test="product-sort-container"]').selectOption('az');
  await this.page.locator('[data-test="product-sort-container"]').selectOption('za');
}
async FooterNavigation(){
    const page1Promise = this.page.waitForEvent('popup');
  await this.page.locator('[data-test="social-twitter"]').click();
  const page1 = await page1Promise;
  const page2Promise = this.page.waitForEvent('popup');
  await this.page.locator('[data-test="social-facebook"]').click();
  const page2 = await page2Promise;
  const page3Promise = this.page.waitForEvent('popup');
  await this.page.locator('[data-test="social-linkedin"]').click();
  const page3 = await page3Promise;}

  async FooterAssertion (){
    let now = new Date();
let currentYear = now.getFullYear();
    await expect(this.page.locator('[data-test="social-twitter"]')).toBeVisible();
    await expect(this.page.locator('[data-test="social-facebook"]')).toBeVisible();
    await expect(this.page.locator('[data-test="social-linkedin"]')).toBeVisible();
    await expect(this.page.locator('[data-test="footer-copy"]')).toBeVisible();
    await expect(this.page.getByText('© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'))
    .toContainText(`© ${currentYear} Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy`);
}

 ShoppingCartAssertion = async ()=>{
    await this.page.locator('[data-test="shopping-cart-link"]').click();  

await expect(this.page.locator('[data-test="checkout"]')).toBeVisible();
await expect(this.page.locator('[data-test="continue-shopping"]')).toBeVisible();
await expect(this.page.locator('[data-test="title"]')).toBeVisible();
await expect(this.page.locator('[data-test="cart-desc-label"]')).toBeVisible();
await expect(this.page.locator('[data-test="cart-quantity-label"]')).toBeVisible();
await this.page.locator('[data-test="continue-shopping"]').click();
 }

}
 export{NavigationComponent} 