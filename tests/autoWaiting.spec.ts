import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}, testInfo) => {
    await page.goto('http://www.uitestingplayground.com/ajax')
    await page.locator('#ajaxButton').click()
    testInfo.setTimeout(testInfo.timeout + 2000)
})

test('Auto waiting for response', async ({page}) => {
    const successButton = page.locator('.bg-success')

    /* await successButton.click()
    const text =await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.') */

    await expect(successButton).toHaveText('Data loaded with AJAX get request.',  {timeout: 20000})
})

test('alternative waits', async ({page}) => {

    //wait for element
    /* await page.waitForSelector('.bg-success')
     */
    //wait for particular response
    /* await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')
 */
    //wait for network call to be completed ('NOT RECOMMENDED')
    await page.waitForLoadState('networkidle')

    
    const successButton = page.locator('.bg-success')
    const text =await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeouts', async ({page}) => {
    test.slow()
    const successButton = page.locator('.bg-success')
    await successButton.click()

})
