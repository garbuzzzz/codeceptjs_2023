Feature('firstFeature')

Scenario('test something',  async ({ I }) => {
	I.amOnPage('/')
	const result = await tryTo(() => {
		I.see('Forms')
	})
	console.log('result from try to: ', result)
	I.click({ xpath: '//h5[text()=\'Elements\']' })
	I.click({ xpath: '//span[text()=\'Web Tables\']' })
	console.log('process.env.HEADLESS: ', process.env.HEADLESS)
	I.click('#delete-record-1')
	// pause()
})
