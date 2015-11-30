define(['jquery','../config/httpprovider'],function($){

    var blogDetailController = ['$scope','$rootScope','$http','$location',function($scope,$rootscope,$http,$location){

        $http.get("/tagslist").success(function(response){
            $scope.tags = response.tagname;
            $scope.selected;
        });

        $scope.submit = function(){
            var res = {
                title:$scope.blogtitle,
                content:$scope.blogcontent,
                tag:$scope.selected
            };

            $http.post("/addblog",res).success(function(response){
                response.status == 1 && $location.path('/blog');
            });
        }
    }];

    return blogDetailController;
});