
define(['app', 'controllers/index','controllers/aboutme','controllers/blog'],
    function (app, index,  aboutme,blog) {

        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {templateUrl:'partials/index.html', controller:index}).
                when('/blog', {templateUrl:'partials/blog.html',controller:blog}).
                when('/aboutme', {templateUrl:'partials/aboutme.html',controller:aboutme}).
                otherwise({redirectTo:'/'});
        }]);
    });