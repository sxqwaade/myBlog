define(['jquery','../config/httpprovider'],function($){

    var blogController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
        $rootScope.ajaxloading = false;
        $http.get("/bloglist").success(function(response){

        });

        $scope.addblog = function(){
            $location.path('/blogDetail');
        };
        /*$http.post("/bloglist").success(function(data){
            var text = data.text[0].content;
            $scope.aboutmeText = text;
        });

        $scope.submit=function(){

        }*/
    }];

    return blogController;
});