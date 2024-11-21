import {test, expect} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200')
})

test('navigate to form page', async({page}) => {
    const navigationTo = new NavigationPage(page)
    await navigationTo.formLayoutsPage()
    await navigationTo.datepickerPage()
    await navigationTo.smartTablePage()
    await navigationTo.toastrPage()
    await navigationTo.tooltipPage()
})

test('parameterized methods', async({page}) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1')
    await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckbox('John Smith', 'john.smith@example.com', false)
})
