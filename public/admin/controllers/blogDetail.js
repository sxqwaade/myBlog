define(['jquery'],function($){

    var blogDetailController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

        $rootScope.ajaxloading = true;

        $http.get("/tagslist").success(function(response){
            $scope.tags = response.tagname;
            $scope.selected;
        });

        $http.post("/blogdetail",{id:$rootScope.blogid}).success(function(data){
            $rootScope.ajaxloading = false;

            if(data.data){
                $scope.selected = data.data.tag;
                $scope.blogtitle = data.data.title;
                $scope.blogcontent = data.data.content;
            }
        });

        $scope.submit = function(){
            var res = {
                title:$scope.blogtitle,
                content:$scope.blogcontent,
                tag:$scope.selected,
                id:$rootScope.blogid
            };


            if($rootScope.blogid){
                $http.post("/blogupdate",res).success(function(response){
                    response.status == 1 && $location.path('/blog');
                });
            }else{
                $http.post("/addblog",res).success(function(response){
                    response.status == 1 && $location.path('/blog');
                });
            }

        }
    }];

    return blogDetailController;
});