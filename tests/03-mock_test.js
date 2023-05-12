Feature('mock')

Scenario('test 3: mocking',async ({ I }) => {

	I.usePlaywrightTo('mock response', async ({ page }) => {
		await page.route('https://simple-books-api.glitch.me/books', async route => {
			const json = {
				message: { 'test_breed': [] }
			}
			await route.fulfill({ json })
		})
	})

	I.mockRoute('https://dog.ceo/api/breeds/list/all', route => {
		const json = {
			message: { 'test_breed': [] }
		}
		route.fulfill({ json })
	})

	// I.mockRoute('https://simple-books-api.glitch.me/books', route => route.abort())

	// I.mockRoute('https://simple-books-api.glitch.me/books', async route => {
	// 	const response = await route.fetch()

	// 	const body = await response.text()
	// 	console.log(body)
	// 	console.log("asdfasdfasdfasdfasdfasdfasdffqwefwef")
	// 	await route.fulfill()
	// })

	// let url = 'https://dog.ceo/api/breeds/list/all'
	// I.usePlaywrightTo('mock response', async ({ page }) => {
	// 	await page.route(url, async (route) => {
	// 		const response = await route.fetch()
	// 		console.log('asdfasdfa78yhualksudhfalsk fa')
	// 		console.log(response)
	// 	})
	// })

	// I.sendGetRequest('https://dog.ceo/api/breeds/list/all')
	I.sendGetRequest('https://simple-books-api.glitch.me/books')
	I.seeResponseContainsKeys(['id', 'name','type', 'available'])
	I.seeResponseContainsJson({ 'id':1,'name':'The Russian','type':'fiction','available':true })
	// I.seeResponseContainsJson({ 'message':{ 'affenpinscher':[],'african':[],'airedale':[],'akita':[],'appenzeller':[],'australian':['shepherd'],'basenji':[],'beagle':[],'bluetick':[],'borzoi':[],'bouvier':[],'boxer':[],'brabancon':[],'briard':[],'buhund':['norwegian'],'bulldog':['boston','english','french'],'bullterrier':['staffordshire'],'cattledog':['australian'],'chihuahua':[],'chow':[],'clumber':[],'cockapoo':[],'collie':['border'],'coonhound':[],'corgi':['cardigan'],'cotondetulear':[],'dachshund':[],'dalmatian':[],'dane':['great'],'deerhound':['scottish'],'dhole':[],'dingo':[],'doberman':[],'elkhound':['norwegian'],'entlebucher':[],'eskimo':[],'finnish':['lapphund'],'frise':['bichon'],'germanshepherd':[],'greyhound':['italian'],'groenendael':[],'havanese':[],'hound':['afghan','basset','blood','english','ibizan','plott','walker'],'husky':[],'keeshond':[],'kelpie':[],'komondor':[],'kuvasz':[],'labradoodle':[],'labrador':[],'leonberg':[],'lhasa':[],'malamute':[],'malinois':[],'maltese':[],'mastiff':['bull','english','tibetan'],'mexicanhairless':[],'mix':[],'mountain':['bernese','swiss'],'newfoundland':[],'otterhound':[],'ovcharka':['caucasian'],'papillon':[],'pekinese':[],'pembroke':[],'pinscher':['miniature'],'pitbull':[],'pointer':['german','germanlonghair'],'pomeranian':[],'poodle':['medium','miniature','standard','toy'],'pug':[],'puggle':[],'pyrenees':[],'redbone':[],'retriever':['chesapeake','curly','flatcoated','golden'],'ridgeback':['rhodesian'],'rottweiler':[],'saluki':[],'samoyed':[],'schipperke':[],'schnauzer':['giant','miniature'],'segugio':['italian'],'setter':['english','gordon','irish'],'sharpei':[],'sheepdog':['english','shetland'],'shiba':[],'shihtzu':[],'spaniel':['blenheim','brittany','cocker','irish','japanese','sussex','welsh'],'spitz':['japanese'],'springer':['english'],'stbernard':[],'terrier':['american','australian','bedlington','border','cairn','dandie','fox','irish','kerryblue','lakeland','norfolk','norwich','patterdale','russell','scottish','sealyham','silky','tibetan','toy','welsh','westhighland','wheaten','yorkshire'],'tervuren':[],'vizsla':[],'waterdog':['spanish'],'weimaraner':[],'whippet':[],'wolfhound':['irish'] },'status':'success' })
	// I.seeResponseContainsJson({ 'affenpinscher':[] })
	// I.seeResponseCodeIsSuccessful()

	// I.mockRoute('/', route => {
	// 	console.log(route.request())
	// 	console.log(route.request().postData())

	// 	const json = {
	// 		message: { 'test_breed': [] }
	// 	}
	// 	route.fulfill({ json })
	// })
	// I.sendGetRequest('/')
	// I.seeResponseContainsKeys(['id', 'name','type', 'available'])
})
