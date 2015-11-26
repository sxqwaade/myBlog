require.config({

    paths: {
        jquery: '../lib/jquery/jquery-2.1.3.min',
        bootstrap: '../lib/bootstrap/js/bootstrap.min',
        angular: '../lib/angular/angular',
        angularResource: '../lib/angular/angular-resource',
        angularSanitize: '../lib/angular/angular-sanitize',
        showdown: '../lib/Showdown.min',
        i18n:'../lib/require/i18n',
        modernizr:'../lib/modernizr',
        html5shiv:'../lib/html5shiv',
        detectbrowser:'../lib/detectbrowser'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-sanitize' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'detectbrowser':{deps:['modernizr']}
    },
    priority: [
        "angular"
    ],/*,
     i18n: {
     locale: 'ja-jp'
     },*/
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
    'app',
    'bootstrap',
    'jquery',
    'controllers/layout',
    'routes',
    'detectbrowser'
], function (angular) {
    angular.bootstrap(document, ['app']);

});
