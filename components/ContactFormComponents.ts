import { Page } from "@playwright/test";

class ContactUsComponent {
constructor(private page: Page) {
this.page = page;
}


getFormTitle = () => {
    return this.page.getByRole("heading", {name: "Send us a message" });
};

getMap = () => {
    return this.page.locator("#map");
};

fillContactForm = async ({
    name,
    email,
    message,
} : {
name: string;
email: string;
message: string;
})=>{
await this.page.getByPlaceholder("Enter your name...").fill(name);
await this.page.getByPlaceholder ("Enter your email...").fill(email);
await this.page.getByPlaceholder("Enter your message...").fill(message);
await this.page.getByRole("button", { name: "Send Message" }).click();
};
}
export {ContactUsComponent};