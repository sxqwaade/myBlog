
define(['app', 'controllers/index', 'controllers/login', 'controllers/logout', 'controllers/signup','controllers/blog'],
    function (app, index, login, logout, singnup, blog) {

        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {templateUrl:'partials/index.html', controller:index}).
                when('/login', {templateUrl:'partials/login.html', controller:login}).
                when('/logout', {templateUrl:'partials/logout.html', controller:logout}).
                when('/signup', {templateUrl:'partials/signup.html', controller:singnup}).
                when('/blog', {templateUrl:'partials/blog.html', controller:blog}).
                otherwise({redirectTo:'/'});
              /*  $locationProvider.html5Mode(true);*/
        }]);
    });