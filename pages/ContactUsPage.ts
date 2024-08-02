import { Page, expect } from '@playwright/test';
import { ContactUsComponent } from '../components/ContactFormComponents';

class ContactUsPage {
  form = new ContactUsComponent(this.page);
  heading = this.page.getByRole('heading', { name: 'Contact us' });

  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
    await expect(this.heading).toBeVisible();
  }
}

export { ContactUsPage };