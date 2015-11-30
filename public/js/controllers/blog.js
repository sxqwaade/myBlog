
define(['i18n!resources/nls/res','jquery'],function(res,$){
    var BlogController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){

            $scope.blog={
                title:"",
                content:""
            };

            $scope.blogid = $location.$$search.id;
            $http.post("/blogdetail",{id:$scope.blogid}).success(function(data){
                $rootScope.ajaxloading = false;
                $scope.selected = data.data.tag;
                $scope.blogtitle = data.data.title;
                $scope.blogcontent = data.data.content;
            });

        }];

    return BlogController;
});