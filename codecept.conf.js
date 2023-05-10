const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
	tests: './*_test.js',
	output: './output',
	helpers: {
		REST: {},
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
			waitForAction: 200,
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
	}
}
