
define([ 'i18n!resources/nls/res'], function (res) {
    var LogoutController = ["$scope", "$rootScope", "$http", "$location",
        function ($scope, $rootScope, $http, $location) {
            $rootScope.title =res.logout;
            $http.get('/logout').success(function () {
                $location.path("/");
            });
        }];
    return LogoutController;
});