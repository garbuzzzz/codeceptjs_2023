Feature('firstFeature');

Scenario('test something',  ({ I }) => {
	I.amOnPage('/')
	I.see('Forms')
	I.click({xpath: '//h5[text()=\'Elements\']'})
	I.click({xpath: '//span[text()=\'Web Tabl00es\']'})
	console.log('process.env.HEADLESS: ', process.env.HEADLESS)
	I.click('#delete-record-1')
	// pause()
	// added comment for git
});
