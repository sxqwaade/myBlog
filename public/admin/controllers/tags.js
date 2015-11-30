define(['jquery','../config/httpprovider'],function($){

    var tagsController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
        $rootScope.ajaxloading = false;
        $http.get("/tagslist").success(function(response){
            $scope.tags = response.tagname;
        });

        $scope.addtag = function(){
            $http.post("/addtags",{tagname:$scope.tagname}).success(function(response){
                $http.get("/tagslist").success(function(response){
                    $scope.tags = response.tagname;
                });
            });
        };

        $scope.removetag = function(obj,name){
            $http.post("/removetags",{tagname:name}).success(function(response){
                $http.get("/tagslist").success(function(response){
                    $scope.tags = response.tagname;
                });
            });
        };

    }];

    return tagsController;
});