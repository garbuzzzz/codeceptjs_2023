const Helper = require('@codeceptjs/helper')

class Mock extends Helper {
	async logPlaywrightObject()  {
		// const { Playwright } = this.helpers
		//# it's visible!!
		// console.log('Playwright: ', Playwright) //
	}
	async mockResponse(url) {
		const { page } = this.helpers.Playwright
		await page.route(url, async route => {
			const json = {
				message: { 'test_breed': [] }
			}
			await route.fulfill({ json })
		})
		// await page.goto('https://simple-books-api.glitch.me/books')
	}
	// before/after hooks
	/**
  //  * @protected
   */
	// _before() {
	// remove if not used
	// }

	/**
  //  * @protected
   */
	// _after() {
	// remove if not used
	// }

	// add custom methods here
	// If you need to access other helpers
	// use: this.helpers['helperName']
}

module.exports = Mock
