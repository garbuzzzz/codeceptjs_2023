pipeline {
  options {
    buildDiscarder(logRotator(daysToKeepStr: '14'))
    timeout(time: 5, unit: 'HOURS')
  }

  triggers {
    cron('0 6 * * 1,5')
  }

  // parameters {
  //   choice(name: "TAGS", choices: flows, description: "Cucumber expression that describes which tests to run")
  // }

  agent {
    // docker {
    //     image 'vccoredevops/playwright-chrome-edge:0.01'
    //     // args '-v /var/lib/jenkins/workspace/boost-regression:/cucumber-playwright/reports -p 3000:3000'
    //     args '-v C:/ProgramData/Jenkins/.jenkins/workspace/docker-sales-crm/:/docker-sales-crm-attempt/reports -p 3000:3000'

    // }
		dockerfile true
  }

  stages {
		stage('example') {
        steps {
            echo 'Hello Pavel'
        }
    }
	}
}
