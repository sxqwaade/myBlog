/**
 * Created with JetBrains WebStorm.
 * User: shawn.song
 * Date: 12/21/15
 * Time: 5:17 PM
 * To change this template use File | Settings | File Templates.
 */
//TODO Define module
define([ 'i18n!resources/nls/res'], function (res) {
    var LoginController = ["$scope", "$rootScope", "$http", "$location",
        function ($scope, $rootScope, $http, $location) {
            $rootScope.title = res.login;


            if($rootScope.checklogin){
                $location.path('/');
            }

            $scope.user = {
                name:'',
                password:''
            };

           $scope.login = function () {
                $http.post('/login', $scope.user).success(function (data) {

                    if (data.err) {
                        return $scope.err = data.err;
                    }
                   // $scope.$parent.resetLogin(data);
                    $rootScope.checklogin = true;
                    $scope.resetLogin(data.user);
                    $location.path("/index");
                });
            };
            $scope.register = function () {
                /* var a = $(".login-form")[0];
                 a.style.top = "-1000px";
                 setTimeout(function () {
                 window.location.hash = "/signup"
                 }, 2000)
                 */
                window.location.hash = "/signup";
            };
        }];
    return LoginController;
});