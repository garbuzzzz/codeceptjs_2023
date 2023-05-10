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
		FileSystem: {},
		Playwright: {
			url: 'https://demoqa.com',
			show: true,
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
