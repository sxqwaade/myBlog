define(['../app'],function(app){
    var adminController = ['$scope','$rootScope','$http','$location',function($scope,$rootscope,$http,$location){
       $http.get('/checklogin').success(function(response){
           if(response.status == 0){
               $location.path("/login");
            }else{
               $location.path("/aboutme");
            }
        });
    }];

    return adminController;
});