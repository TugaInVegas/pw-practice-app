import {test, expect} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'

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