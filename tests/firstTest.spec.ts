import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async ({page}) => {
    //by Tag Name
    page.locator('input')
    
    //by ID
    page.locator('#inputEmail1')
    
    //by Class Value
    page.locator('.shape-rectangle')
    
    //by Attribute
    page.locator('[placeholder="Email"]')

    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
    
    //Combine diferent selectors
    await page.locator('input[placeholder="Email"].shape-rectangle#inputEmail1').click()

    //By Xpath (not recommended)
    page.locator('//*[@id="inputEmail1"]')

    //By partial text
    page.locator(':text("Using")')

    //By exact text match
    page.locator(':text-is("Using the Grid")')
})