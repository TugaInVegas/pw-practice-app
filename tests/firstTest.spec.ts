import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
})

test('go to forms and form layouts', async ({page}) => {
    await page.getByText('Form Layouts').click()

})

test('navigate to datepicker page', async ({page}) => {
    await page.getByText('Datepicker').click()

})