const scanner = require('sonarqube-scanner');
scanner( 

        {
        serverUrl : 'http://localhost:9000/',
        token : "beabcb53ae58f6ad53a98163c64f045a8773debd",
        options: {
                'sonar.projectName':  'Practica4SA',
                'sonar.projectDescription': 'Practica4SA',
                'sonar.sources': 'src',
                'sonar.tests': 'test',
                'sonar.javascript.coveragePlugin': 'lcov',
                'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
                }
        },
        () => process.exit()
)