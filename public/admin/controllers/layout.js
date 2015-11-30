define(['../app','i18n!resources/nls/res'], function (app,res) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function ($scope,$rootScope, $http,$location) {
        $rootScope.ajaxloading = true;
        $http.get('/checklogin').success(function(user){
            $rootScope.ajaxloading = false;
            if(user.status == 0){
                $rootScope.checklogin = false;
                $location.path("/login");
            }else{
                $rootScope.checklogin = true;
                //$location.path("/blog");
            }
        });

        $scope.resetLogin = function (user) {
            if (user.name) {
                $scope.login = {
                    url:'logout',
                    name:res.logout
                };

                $scope.signup = {
                    url:'',
                    name:'welcome:' + user.name
                };
            } else {
                $scope.login = {
                    url:'login',
                    name:res.login
                };
                $scope.signup = {
                    url:'signup',
                    name:res.signup
                };
            }
        };

        $(".nav-pills li").click(function(){
            $(".nav-pills li").removeClass("active");
           $(this).addClass("active");
        });
    });
});