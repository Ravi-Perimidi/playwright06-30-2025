import {test as base,Page} from "@playwright/test"

type fixture={
    loggedInPage :Page
}

export const test = base.extend<fixture>({
loggedInPage: async({browser},use)=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://playwright.dev/")
await use(page)
// await context.close();
}
})
