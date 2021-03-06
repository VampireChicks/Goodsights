SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        //System.js files
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        'text': 'libs/systemjs-plugin-text/text.js',

        // App files
        'app': 'scripts/app.js',
        'myRouter': 'scripts/models/router.js',
        'requester': 'scripts/requester.js',
        'userRequester': 'scripts/userRequester.js',
        'multipleController': 'scripts/controllers/multiple.js',
        'userController': 'scripts/controllers/userController.js',
        'templates': 'scripts/templates.js',
        'validator': 'scripts/models/validator.js',

        // Library files
        'jquery': 'libs/jquery/dist/jquery.min.js',
        'handlebars': 'libs/handlebars/dist/handlebars.amd.js',
        'toastr': 'libs/toastr/build/toastr.min.js',
    }
});

System.import('app');