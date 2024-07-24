import { Page, expect } from '@playwright/test';

class SuccessfulPaymentComponent {
constructor(private page: Page) {
    this.page = page;
}
async assertSuccessScreen(){
    await expect(this.page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible();
await expect(this.page.getByRole('heading', { name: 'Cart summary' })).toBeVisible();
await expect(this.page.locator('.snipcart-billing-completed__header')).toBeVisible();
await expect(this.page.locator('div').filter({ hasText: /^Payment$/ })).toBeVisible();
await expect(this.page.getByText('Total', { exact: true })).toBeVisible();
await expect(this.page.getByText('$').nth(2)).toBeVisible();
await expect(this.page.getByText('$').nth(1)).toBeVisible();
}}
export {SuccessfulPaymentComponent}