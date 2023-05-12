const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
	tests: './tests/*_test.js',
	output: './output',
	helpers: {
		REST: {},
		JSONResponse: {},
			// requestHelper: 'Playwright',
		// },
		FileSystem: {},
		Playwright: {
			url: 'https://demoqa.com',
			show: false,
			video: true,
			trace: true,
			browser: 'chromium',
			chromium: {
				args: [
					// "--start-maximized",
				],
				ignoreHTTPSErrors: true,
			},
			// windowSize: "1920x1000",
			waitForNavigation: 'domcontentloaded', // ["networkidle2"]
			waitForAction: 200, // works
		}
	},
	mocha: {
		reporterOptions: {
			'codeceptjs-cli-reporter': {
				stdout: '-',
				options: {
					verbose: false,
					steps: true,
				},
			},
			'mocha-junit-reporter': {
				stdout: './output/console.log',
				options: {
					mochaFile: './output/result.xml',
				},
			},
		},
	},
	include: {
		I: './steps_file.js'
	},
	name: 'codeceptjs_2023',
	plugins: {
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
			retries: 3,
			defaultIgnoredSteps: ['wait*', 'execute*', 'run*', 'have*', 'send*'],
		},
		screenshotOnFail: {
			enabled: true,
		},
		allure: {
			enabled: true,
			require: '@codeceptjs/allure-legacy',
			outputDir: './allure-results',
		},
		tryTo: {
			enabled: true
		},
		subtitles: { // Automatically captures steps as subtitle, and saves it as an artifact when a video is found for a failed test
			enabled: true
		},
		stepTimeout: { // not sure how it works
			enabled: true,
			overrideStepLimits: false, // default is false
			noTimeoutSteps: [
				'scroll*', // ignore all scroll steps
				/Cookie/, // ignore all steps with a Cookie in it (by regexp)
			],
			customTimeoutSteps: [
				['myFlakyStep*', 1],
				['scrollWhichRequiresTimeout', 5],
			]
		},
		stepByStepReport: { // see more options in docs
			deleteSuccessful: false,
			enabled: true, // will put in output folder a separate folder for each test case with the screenshots
			screenshotsForAllureReport: true, // works!
		}
	},
	multiple: {
		threebrowsers: {
			chunks: process.env.THREADS || 1,
			browsers: [
				{
					browser: 'chromium',
					windowSize: '1920x1080',
					show: false
				},
				{
					browser: 'firefox',
					windowSize: '1920x1080',
					show: true
				},
				{
					browser: 'webkit',
					windowSize: '1920x1080',
					show: false,
				}
			],
		},
		chromeonly: {
			chunks: process.env.THREADS || 2,
			browsers: [
				{
					browser: 'chromium',
					windowSize: '1920x1080',
					show: false,
				},
			],
		},
		firefoxonly: {
			chunks: process.env.THREADS || 2,
			browsers: [
				{
					browser: 'firefox',
					windowSize: '1920x1080',
					show: true
				},
			],
		},
	},
}
