require.config({

    paths: {
        jquery: '../lib/jquery/jquery-1.8.2.min',
        bootstrap: '../lib/bootstrap/js/bootstrap',
        //underscore: '../lib/underscore/underscore',
        angular: '../lib/angular/angular',
        angularResource: '../lib/angular/angular-resource',
        angularSanitize: '../lib/angular/angular-sanitize',
        angularMocks:'../lib/angular/angular-mocks',
        showdown: '../lib/Showdown.min',
        //text: '../lib/require/text',
        i18n:'../lib/require/i18n',
        modernizr:'../lib/modernizr',
        html5shiv:'../lib/html5shiv',
        //mcore:'../lib/mcore.min',
        //fullscreen:'../lib/fullscreen',
        //mcustomscrollbar:'../lib/jquery.mCustomScrollbar.concat.min',
        detectbrowser:'../lib/detectbrowser'
        //res:'../resources/nls/res'

    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-resource' : {deps:['angular']},
        'angular-sanitize' : {deps:['angular']},
        'bootstrap': {deps:['jquery']},
        'angularMocks':{deps:['angular']},
        //'mcustomscrollbar':{deps:['jquery']},
        //'underscore': {exports: '_'},
        'detectbrowser':{deps:['modernizr']}
        //'res':{exports:'res'}
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
         'jquery',
          //'fullscreen',
          //'mcore',
         'controllers/layout',
         'controllers/index',
         'routes',
         'detectbrowser'
], function (angular) {
    angular.bootstrap(document, ['app']);
});
