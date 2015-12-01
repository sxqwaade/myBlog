define(['jquery','../config/httpprovider'],function($){

    var blogController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
        $rootScope.ajaxloading = false;
        $scope.pagination = false;
        $http.get("/bloglist").success(function(response){
            $scope.bloglist = response.bloglist;
        });

        $scope.addblog = function(){
            $rootScope.blogid="";
            $location.path('/blogDetail');
        };

        $scope.editblog = function(id){
            $rootScope.blogid = id;
            $location.path('/blogDetail');
        };

        $scope.removeblog = function(id){
            $http.post('/blogremove',{_id:id}).success(function(response){
                $http.get("/bloglist").success(function(response){
                    $scope.bloglist = response.bloglist;
                });
            });
        };

    }];

    return blogController;
});