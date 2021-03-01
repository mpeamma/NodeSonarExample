const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        //serverUrl:  'http://localhost:9000',
        serverUrl: process.env.SONAR_URL,
        options : {
            'sonar.sources':  'src',
            'sonar.tests':  'src',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml',
            'sonar.login': 'admin',
            'sonar.password': 'password'
        }
    }, () => {});
