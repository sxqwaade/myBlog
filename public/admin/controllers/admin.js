define(['../app'],function(app){
    var adminController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
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
    }];

    return adminController;
});