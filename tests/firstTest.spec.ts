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

test('User facing locators', async ({page}) => {
    await page.getByRole('textbox', {name: 'Email'}).first().click()
    await page.getByRole('button', {name: 'Sign in'}).first().click()

    await page.getByLabel('Email').first().click()
    await page.getByPlaceholder('Jane Doe').first().click()
})

test('locating child elements', async ({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
    //Added some comments to have pr approved
    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()

    await page.locator('nb-card').nth(0).getByRole('button').click()
})
