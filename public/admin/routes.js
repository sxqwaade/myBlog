
define(['app', 'controllers/admin','controllers/aboutme','controllers/blog','controllers/login'],
    function (app, admin,  aboutme, blog, login) {
        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/aboutme', {templateUrl:'/partials/admin/aboutme.html',controller:aboutme}).
                when('/blog', {templateUrl:'/partials/admin/blog.html',controller:blog}).
                when('/login',{templateUrl:'/partials/admin/login.html',controller:login}).
                otherwise({redirectTo:'/'});
        }]);
    });