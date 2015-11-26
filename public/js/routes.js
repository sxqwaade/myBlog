
define(['app', 'controllers/index','controllers/aboutme'],
    function (app, index,  aboutme) {

        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {templateUrl:'partials/index.html', controller:index}).
                when('/aboutme', {templateUrl:'partials/aboutme.html',controller:aboutme}).
                otherwise({redirectTo:'/'});
        }]);
    });