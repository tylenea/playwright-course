import { Page, expect } from "@playwright/test";

class FooterNavigationComponents {
    constructor(private page: Page) {
    this.page = page;
    }
General = async (link: "Our Story" | "Contact" | "Products") => {
    await this.page
    .getByRole("contentinfo")
    .getByRole("link", {name: link })
    .click();    
};
Help = async (link: "Shipping" | "Returns") => {
    await this.page
    .getByRole("link", {name: link })
    .click();
};

ContactUs = async (link: "Get in touch" | "fur@example.com" | "+1") =>{
await this.page.getByRole('link', { name: link }).click();
}
ContactUsAssertion = async()=>{
    await expect(this.page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
  await expect(this.page.getByRole('link', { name: 'Get in touch' })).toBeVisible();
  await expect(this.page.getByRole('link', { name: 'fur@example.com' })).toBeVisible();
 
 
  await expect(this.page.getByRole('link', { name: '+1' })).toBeVisible();
  await expect(this.page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first()).toBeVisible();
  await expect(this.page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(1)).toBeVisible();
  await expect(this.page.locator('li').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(2)).toBeVisible();

}
FooterInfo = async (link: "string") =>{
    await this.page.getByRole('link', { name: link }).click();
    }

FooterInfoAssertion= async()=>{
    await expect(this.page.getByRole('contentinfo').locator('#Capa_1')).toBeVisible();
  await expect(this.page.getByRole('contentinfo').getByText('Fur', { exact: true })).toBeVisible();
  await expect(this.page.getByText('Many people have the notion')).toBeVisible();

  let now = new Date();
  let currentYear = now.getFullYear();
  await expect(this.page.getByText('All Rights Reserved © 2023')).toBeVisible();
  await expect(this.page.getByText('All Rights Reserved © 2023')).toContainText(`All Rights Reserved © ${currentYear} Fur, Inc. Template by CloudCannon`);
}
}
export { FooterNavigationComponents };