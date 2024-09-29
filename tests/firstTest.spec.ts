import {expect, test} from '@playwright/test';

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

test('locating parent elements', async ({page}) => {
    await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('textbox', {name: 'Email'}).click()
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: 'Email'}).click()

    await page.locator('nb-card').filter({hasText: 'Basic Form'}).getByRole('textbox', {name: 'Email'}).click()
    await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: 'Password'}).click()
    //filter by nb-card, then filter by those that have a nb-checkbox, then filter by those that have text Sign in, then get the email textbox
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: 'Sign in'}).getByRole('textbox', {name: 'Email'}).click()

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: 'Email'}).click()
})

test('reusing locators', async ({page}) => {
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic Form'})
    const email = basicForm.getByRole('textbox', {name: 'Email'})
    const password = basicForm.getByRole('textbox', {name: 'Password'})
    await email.fill('test@test.com')
    await password.fill('123456')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(email).toHaveValue('test@test.com')
})

test('extracting values', async ({page}) => {
    const basicForm = page.locator('nb-card').filter({hasText: 'Basic Form'})
    //single text value
    const buttonText = await basicForm.getByRole('button').textContent()
    expect(buttonText).toEqual('Submit')

    //all text values
    const allRadioButtonLabels = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonLabels).toContain('Option 2')

    //input values
    const emailField = basicForm.getByRole('textbox', {name: 'Email'})
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')

    const placeHolderValue = await emailField.getAttribute('placeholder')
    expect(placeHolderValue).toEqual('Email')
})
