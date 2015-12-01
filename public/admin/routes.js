
define(['app',
        'controllers/admin',
        'controllers/aboutme',
        'controllers/tags',
        'controllers/blog',
        'controllers/blogDetail',
        'controllers/login',
        'controllers/logout',
        'controllers/signup'],
    function (app, admin,  aboutme, tags, blog, blogDetail,login,logout,signup) {
        return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/',{templateUrl:'/partials/admin/index.html',controller:admin}).
                when('/aboutme', {templateUrl:'/partials/admin/aboutme.html',controller:aboutme}).
                when('/tags', {templateUrl:'/partials/admin/tags.html',controller:tags}).
                when('/blog', {templateUrl:'/partials/admin/blog.html',controller:blog}).
                when('/blogDetail', {templateUrl:'/partials/admin/blogDetail.html',controller:blogDetail}).
                when('/login',{templateUrl:'/partials/login.html',controller:login}).
                when('/logout', {templateUrl:'/partials/logout.html', controller:logout}).
                when('/signup',{templateUrl:'/partials/signup.html',controller:signup}).
                otherwise({redirectTo:'/'});
        }]);
    });