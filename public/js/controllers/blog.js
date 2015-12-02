
define(['i18n!resources/nls/res','jquery','../../background/images','../config/httpprovider'],function(res,$,images){
    var BlogController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){
            $location.$$path == "/blog" ? $rootScope.isblogdetail = true : $rootScope.isblogdetail = false;
            $scope.blog={
                title:"",
                content:""
            };
            $scope.isblogDetail = true;
            $scope.blogid = $location.$$search.id;
            $scope.fullscreen_bg = $location.$$search.bg;
            $http.post("/blogdetail",{id:$scope.blogid}).success(function(data){
                $rootScope.ajaxloading = false;
                $scope.blog = data.data;
            });


        }];

    return BlogController;
});