/**
 * Created with JetBrains WebStorm.
 * User: shawn.song
 * Date: 12/21/15
 * Time: 5:17 PM
 * To change this template use File | Settings | File Templates.
 */

//TODO Define module
define([], function () {
    var SignUpController = ["$scope", "$rootScope", "$http", "$location", function ($scope, $rootScope, $http, $location) {
        $rootScope.title = "SignUp";
        $scope.user = {
            name:'',
            password:'',
            repeatpassword:''
        };

        $scope.createClick = function () {
            $http.post('/signup', $scope.user).success(function (data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $location.path("/login");
            });
        };
    }];
    return SignUpController;
});