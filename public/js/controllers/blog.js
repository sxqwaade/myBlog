
define(['i18n!resources/nls/res','jquery','../config/httpprovider'],function(res,$){
    var BlogController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){

            $scope.blog={
                title:"",
                content:""
            };

            $scope.blogid = $location.$$search.id;
            console.log($scope.blogid);
            $http.post("/blogdetail",{id:$scope.blogid}).success(function(data){
                $rootScope.ajaxloading = false;
                $scope.blog = data.data;
            });

        }];

    return BlogController;
});