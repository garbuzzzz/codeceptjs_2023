#!groovy
import groovy.json.JsonSlurper

List flows = [
    "(@us-emo or @us-ate) and (not @wip or @flaky or @bug)",
    "@us-emo and (not @wip or @flaky)",
    "@us-ate and (not @wip or @flaky)",
    "@us-fad and (not @wip or @flaky)",
    "@us-hpic and (not @wip or @flaky)",
    "@gcrm",
]

pipeline {
  options {
    buildDiscarder(logRotator(daysToKeepStr: '14'))
    timeout(time: 5, unit: 'HOURS')
  }

  triggers {
    cron('0 6 * * 1,5')
  }

  // parameters {
  //   choice(name: "ENVIRONMENT", choices: ["STAGE"], description: "Environment to run tests against")
  //   choice(name: "TAGS", choices: flows, description: "Cucumber expression that describes which tests to run")
  // }

  // environment {
  //   NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
  //   MONGOMS_DEBUG=1
  //   MONGOMS_PREFER_GLOBAL_PATH=false
  //   MONGOMS_RUNTIME_DOWNLOAD=true
  //   MONGOMS_PLATFORM="linux"
  //   MONGOMS_DOWNLOAD_DIR ="${WORKSPACE}/node_modules/.cache/mongodb-memory-server/mongodb-binaries"
  //   PLAYWRIGHT_BROWSERS_PATH="${WORKSPACE}/browsers"
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
