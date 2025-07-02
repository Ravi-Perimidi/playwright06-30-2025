import {test} from '../fixtures/fixture';
import {Docs} from '../pages/Docs.page'

let docs:Docs;

test.beforeAll(async({loggedInPage})=>{
    docs = new Docs(loggedInPage)
})

test('test1',async()=>{
// await loggedInPage.goto("https://playwright.dev/")
await docs.clickDocs()
const texts = await docs.getMenuItems()
console.log(texts)
})

// test('test2',async({page})=>{
// await page.goto("https://playwright.dev/")
// await page.click("//a[@class = 'menu__link' and text()='Docs']")
// })

// test('test3',async({page})=>{
// await page.goto("https://playwright.dev/")
// await page.click("//a[@class = 'menu__link' and text()='Docs']")
// })