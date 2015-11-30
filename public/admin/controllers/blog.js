define(['jquery','../config/httpprovider'],function($){

    var blogController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
        $rootScope.ajaxloading = false;
        $scope.pagination = false;
        $http.get("/bloglist").success(function(response){
            $scope.bloglist = response;
        });

        $scope.addblog = function(){
            $location.path('/blogDetail');
        };

        $scope.editblog = function(id){
            $location.path('/blogDetail');
            $rootScope.blogid = id;
        };

        $scope.removeblog = function(id){
            $http.post('/blogremove',{_id:id}).success(function(response){
                $http.get("/bloglist").success(function(response){
                    $scope.bloglist = response;
                });
            });
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