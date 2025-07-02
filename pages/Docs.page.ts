import { Locator, Page } from "@playwright/test";

export class Docs {
    public page:Page
    readonly docsLink:Locator
    readonly menuItems: Locator

 constructor(page:Page){
    this.page = page
    this.docsLink = this.page.locator("//a[text()='Docs']")
    this.menuItems = this.page.locator("//a[@class='menu__link']")
 }

 async clickDocs(){
    await this.docsLink.click()
 }

 async getMenuItems():Promise<string[]>{
    const menuItems = await this.menuItems.allTextContents();
    return menuItems;
 }

}