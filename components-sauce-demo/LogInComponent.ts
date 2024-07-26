import { Page } from "@playwright/test";

class LogInComponent {
    constructor(private page: Page) {
    this.page = page;
    }
 async LogIn ({
  username,
password
 }:{
  username: string,
  password: string,
 }){
  await this.page.locator('[data-test="username"]').click();
  await this.page.locator('[data-test="username"]').fill(username);
  await this.page.locator('[data-test="password"]').click();
  await this.page.locator('[data-test="password"]').fill(password);
  await this.page.locator('[data-test="login-button"]').click();
 }
}

export {LogInComponent}