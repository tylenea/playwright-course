import { Page, expect } from '@playwright/test';
import { ContactUsComponent } from '../components/ContactFormComponents';

class ContactUsPage {
  ContactUsComponent: ContactUsComponent = new ContactUsComponent(this.page)

  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
  }
  getHeading(){
    return this.page.getByRole('heading', { name: 'Get in touch' })
  }
  async getFooter(){
    return this.page.getByRole("contentinfo")
  }
}

export { ContactUsPage };