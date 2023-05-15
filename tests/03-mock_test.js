Feature('mock')

// Scenario('mocking: works only for I.amOnPage, doesnt work for I.sendGetRequest',async ({ I }) => {
// 	I.amOnPage('https://google.com')
// 	I.mockRoute('https://simple-books-api.glitch.me/books', route => route.abort())
// 	I.amOnPage('https://simple-books-api.glitch.me/books')
// })

// Scenario('mocking: doesnt work for I.sendGetRequest',async ({ I }) => {
// 	I.mockRoute('https://simple-books-api.glitch.me/books', route => route.abort())
// 	I.sendGetRequest('https://simple-books-api.glitch.me/books')
// 	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
// 	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
// 	I.seeResponseCodeIsSuccessful()
// })

// Scenario('mocking: custom mock helper, works again only for I.amOnPage',async ({ I }) => {
// 	I.mockResponse('https://simple-books-api.glitch.me/books')
// 	I.amOnPage('https://simple-books-api.glitch.me/books')
// })

// Scenario('mocking: custom mock helper, doesnt work for I.sendGetRequest',async ({ I }) => {
// 	I.mockResponse('https://simple-books-api.glitch.me/books')
// 	I.sendGetRequest('https://simple-books-api.glitch.me/books')
// 	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
// 	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
// 	I.seeResponseCodeIsSuccessful()
// })

// Scenario('I.mockRoute can also use Playwright code inside, but for I.amOnPage only',async ({ I }) => {
// 	I.mockRoute('https://simple-books-api.glitch.me/books', route => {
// 		const json = {
// 			message: { 'test_breed': [] }
// 		}
// 		route.fulfill({ json })
// 	})
// 	I.amOnPage('https://simple-books-api.glitch.me/books')
// })

// Scenario('I.mockRoute can also use Playwright code inside, but its not mocking I.sendGetRequest',async ({ I }) => {
// 	I.mockRoute('https://simple-books-api.glitch.me/books', route => {
// 		const json = {
// 			message: { 'test_breed': [] }
// 		}
// 		route.fulfill({ json })
// 	})
// 	I.sendGetRequest('https://simple-books-api.glitch.me/books')
// 	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
// 	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
// 	I.seeResponseCodeIsSuccessful()
// })

// Scenario('I.usePlaywrightTo can also use Playwright code inside, but for I.amOnPage only',async ({ I }) => {
// 	I.usePlaywrightTo('mock response', async ({ page }) => {
// 		await page.route('https://simple-books-api.glitch.me/books', async route => {
// 			const json = {
// 				message: { 'test_breed': [] }
// 			}
// 			await route.fulfill({ json })
// 		})
// 	})
// 	I.amOnPage('https://simple-books-api.glitch.me/books')
// })

// Scenario('I.usePlaywrightTo can also use Playwright code inside, but its not mocking I.sendGetRequest',async ({ I }) => {
// 	I.usePlaywrightTo('mock response', async ({ page }) => {
// 		await page.route('https://simple-books-api.glitch.me/books', async route => {
// 			const json = {
// 				message: { 'test_breed': [] }
// 			}
// 			await route.fulfill({ json })
// 		})
// 	})
// 	I.sendGetRequest('https://simple-books-api.glitch.me/books')
// 	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
// 	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
// 	I.seeResponseCodeIsSuccessful()
// })

// Scenario('mocking: POST - doesnt work for I.sendPostRequest',async ({ I }) => {
// 	I.mockRoute('https://simple-books-api.glitch.me/orders', route => {
// 		const json = {
// 			message: { 'test_breed': [] }
// 		}
// 		route.fulfill({ json })
// 	})
// 	const response = await I.sendPostRequest('https://simple-books-api.glitch.me/orders',
// 		{
// 			'bookId': 1,
// 			'customerName': 'Pavel'
// 		}
// 	)
// 	console.log('response: ', response.data)
// })

// Scenario('DOESNT WORK: I.usePlaywrightTo mock POST request',async ({ I }) => {
// 	//# I have no idea how to make it work...
// 	I.usePlaywrightTo('mock POST response', async ({ page }) => {
// 		await page.route('https://simple-books-api.glitch.me/orders', async (route) => {
// 			const json = {
// 				message: { 'test_breed': [] }
// 			}
// 			await route.fulfill({ json })
// 		})
// 		//# couldn't make request object be available..
// 		await request.post('https://simple-books-api.glitch.me/orders',
// 			{
// 				'bookId': 1,
// 				'customerName': 'Pavel'
// 			})
// 	})
// })

// Scenario('I.mockRequest only for Puppeteer and WebdriverIO according to the docs!!',async ({ I }) => {
// I.mockRequest only for Puppeteer and WebdriverIO according to the docs!!
// I.mockRequest('GET', 'https://simple-books-api.glitch.me/books', '[]')
// })

// Scenario('mock Route (Playwright) (or I.mockRoute) + I.makeApiRequest doesnt help...',async ({ I }) => {
// 	//# either one doesn't help...
// 	I.usePlaywrightTo('mock response', async ({ page }) => {
// 		await page.route('https://simple-books-api.glitch.me/books', async route => {
// 			const json = {
// 				message: { 'test_breed': [] }
// 			}
// 			await route.fulfill({ json })
// 		})
// 	})

// 	I.mockRoute('https://simple-books-api.glitch.me/books', route => {
// 		route.fulfill({ body: 'mocked-data' })
// 	})

// 	const response = await I.makeApiRequest('GET', 'https://simple-books-api.glitch.me/books')
// 	const data = await response.json()
// 	console.log('data: ', data)
// 	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
// })

// Scenario('id doesnt help even with the code from senior guy in slack...',async ({ I }) => {
// 	I.mockResponse2('https://simple-books-api.glitch.me/books')
// 	const response = await I.makeApiRequest('GET', 'https://simple-books-api.glitch.me/books')
// 	const data = await response.json()
// 	console.log('data: ', data)
// 	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
// })

Scenario('test',async ({ I }) => {

	I.usePlaywrightTo('play around with Playwright api', async ({ page }) => {
		await page.route('https://simple-books-api.glitch.me/books', async route=> {
			let json = { message: { 'test_breed': [] } }
			route.fulfill({ json })
		})
		page.on('request', request => { //!! it hell works with page.goto!!! otherwise it ignores what inside this block
			// eslint-disable-next-line no-console
			console.log('url and method are: ', request.url() + ' ' + request.method())
		})
		const response1 = await page.goto('https://simple-books-api.glitch.me/books')
		// also shows the information:
		// eslint-disable-next-line no-console
		console.log('request from response, method: ', response1.request().method())

		//! this is where is works:
		const data1 = await response1.json()
		// eslint-disable-next-line no-console
		console.log('response1 actual data, WORKS: ', data1)

		const response2 = await page.request.get('https://simple-books-api.glitch.me/books')

		//!! response2.request is not a function!
		// console.log('request from response: ', response2.request().method())

		//# WELL, FINALLY I GOT THE POINT: IT WORKS ONLY WITH BROWSER CONTEXT, NOT WITH API CALLS PERFORMED BY API CALLS FROM API TESTING
		const data2 = await response2.json()
		// eslint-disable-next-line no-console
		console.log('data2: ', data2)
	})
})
