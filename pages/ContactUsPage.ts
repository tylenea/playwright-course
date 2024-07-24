import { Page, expect } from '@playwright/test';
import { ContactUsComponent } from '../components/ContactFormComponents';

class ContactUsPage {
  ContactUsComponent: ContactUsComponent = new ContactUsComponent(this.page)

  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('contact/');
  }
  getHeading(){
    return this.page.locator("h1");
  }
  async getFooter(){
    return this.page.getByRole("contentinfo")
  }
}

export { ContactUsPage };