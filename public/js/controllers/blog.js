
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
            var arr = [];
            $http.post("/blogdetail",{id:$scope.blogid}).success(function(data){
                $rootScope.ajaxloading = false;
                $scope.blog = data.data;
                for(var i in $rootScope.bloglist){
                    if($rootScope.bloglist[i].tag ==  $scope.blog.tag && $rootScope.bloglist[i]._id !== $scope.blog._id){
                        arr.push({id:$rootScope.bloglist[i]._id,title:$rootScope.bloglist[i].title});
                    }
                }
                $scope.relateblog = arr;
            });

            $http.get("/getComment?comment_id="+ $scope.blogid+"").success(function(data){
                $scope.feedback = data;
            });
            $scope.tourist = {
                name:'',
                email:'',
                site:'',
                text:'',
                comment_id: $scope.blogid
            }
            $scope.submit = function(isValid){
                if (isValid) {
                    $http.post('/addComment',$scope.tourist).success(function(data){
                        console.log(data.info);
                        if(data.status == 1){
                            $scope.responseSuccess = data.info;
                            $scope.responseErr = "";
                        }else{
                            $scope.responseSuccess = "";
                            $scope.responseErr = data.info;
                        }
                    });
                }
            };
        }];

    return BlogController;
});