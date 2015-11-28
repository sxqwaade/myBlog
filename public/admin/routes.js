
define(['app', 'controllers/admin','controllers/aboutme','controllers/blog','controllers/login','controllers/signup'],
    function (app, admin,  aboutme, blog, login,signup) {
        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/',{templateUrl:'/partials/admin/index.html',controller:admin}).
                when('/aboutme', {templateUrl:'/partials/admin/aboutme.html',controller:aboutme}).
                when('/blog', {templateUrl:'/partials/admin/blog.html',controller:blog}).
                when('/login',{templateUrl:'/partials/login.html',controller:login}).
                when('/signup',{templateUrl:'/partials/signup.html',controller:signup}).
                otherwise({redirectTo:'/'});
        }]);
    });