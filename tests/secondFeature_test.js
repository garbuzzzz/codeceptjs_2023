Feature('secondFeature')

Scenario('test something 2 within 7 seconds',
	{ timeout: 7 }, // Test timeout can be set in seconds via Scenario options: will fail if longer then 7 sec
	async ({ I }) => {
		I.amOnPage('https://google.com')
	})
