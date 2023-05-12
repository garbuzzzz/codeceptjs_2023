xFeature('mock')

Scenario('mocking: works only for I.amOnPage, doesnt work for I.sendGetRequest',async ({ I }) => {
	I.amOnPage('https://google.com')
	I.mockRoute('https://simple-books-api.glitch.me/books', route => route.abort())
	I.amOnPage('https://simple-books-api.glitch.me/books')
})

Scenario('mocking: doesnt work for I.sendGetRequest',async ({ I }) => {
	I.mockRoute('https://simple-books-api.glitch.me/books', route => route.abort())
	I.sendGetRequest('https://simple-books-api.glitch.me/books')
	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
	I.seeResponseCodeIsSuccessful()
})

Scenario('mocking: custom mock helper, works again only for I.amOnPage',async ({ I }) => {
	I.mockResponse('https://simple-books-api.glitch.me/books')
	I.amOnPage('https://simple-books-api.glitch.me/books')
})

Scenario('mocking: custom mock helper, doesnt work for I.sendGetRequest',async ({ I }) => {
	I.mockResponse('https://simple-books-api.glitch.me/books')
	I.sendGetRequest('https://simple-books-api.glitch.me/books')
	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
	I.seeResponseCodeIsSuccessful()
})

Scenario('I.mockRoute can also use Playwright code inside, but for I.amOnPage only',async ({ I }) => {
	I.mockRoute('https://simple-books-api.glitch.me/books', route => {
		const json = {
			message: { 'test_breed': [] }
		}
		route.fulfill({ json })
	})
	I.amOnPage('https://simple-books-api.glitch.me/books')
})

Scenario('I.mockRoute can also use Playwright code inside, but its not mocking I.sendGetRequest',async ({ I }) => {
	I.mockRoute('https://simple-books-api.glitch.me/books', route => {
		const json = {
			message: { 'test_breed': [] }
		}
		route.fulfill({ json })
	})
	I.sendGetRequest('https://simple-books-api.glitch.me/books')
	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
	I.seeResponseCodeIsSuccessful()
})

Scenario('I.usePlaywrightTo can also use Playwright code inside, but for I.amOnPage only',async ({ I }) => {
	I.usePlaywrightTo('mock response', async ({ page }) => {
		await page.route('https://simple-books-api.glitch.me/books', async route => {
			const json = {
				message: { 'test_breed': [] }
			}
			await route.fulfill({ json })
		})
	})
	I.amOnPage('https://simple-books-api.glitch.me/books')
})

Scenario('I.usePlaywrightTo can also use Playwright code inside, but its not mocking I.sendGetRequest',async ({ I }) => {
	I.usePlaywrightTo('mock response', async ({ page }) => {
		await page.route('https://simple-books-api.glitch.me/books', async route => {
			const json = {
				message: { 'test_breed': [] }
			}
			await route.fulfill({ json })
		})
	})
	I.sendGetRequest('https://simple-books-api.glitch.me/books')
	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
	I.seeResponseCodeIsSuccessful()
})
