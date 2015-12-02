require.config({

    paths: {
        jquery: '../lib/jquery/jquery-2.1.3.min',
        bootstrap: '../lib/bootstrap/js/bootstrap.min',
        angular: '../lib/angular/angular',
        angularResource: '../lib/angular/angular-resource',
        angularSanitize: '../lib/angular/angular-sanitize',
        angularMocks:'../lib/angular/angular-mocks',
        showdown: '../lib/Showdown.min',
        i18n:'../lib/require/i18n',
        modernizr:'../lib/modernizr',
        html5shiv:'../lib/html5shiv',
        mcore:'../lib/mcore.min',
        detectbrowser:'../lib/detectbrowser',
        scrollSpeed:'../lib/jquery/jQuery.scrollSpeed'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-resource' : {deps:['angular']},
        'angular-sanitize' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'scrollSpeed':{deps:['jquery']},
        'angularMocks':{deps:['angular']},
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
         'mcore',
         'controllers/layout',
         'controllers/index',
         'directives/bnLazySrc',
         'routes',
         'detectbrowser',
         'scrollSpeed'
], function (angular) {
    angular.bootstrap(document, ['app']);
    $(function() {
        jQuery.scrollSpeed(100, 1000);
    });
});
