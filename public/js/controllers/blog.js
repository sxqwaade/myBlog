
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

            $scope.feedback = [];

            $http.get("/getComment?comment_id="+ $scope.blogid+"").success(function(data){
                $scope.feedback.push.apply( $scope.feedback,data);
            });

            $scope.tourist = {
                name:'',
                email:'',
                site:'',
                text:'',
                title:$scope.blog.title,
                comment_id: $scope.blogid
            }

            $scope.submit = function(isValid){
                $scope.tourist.title = $scope.blog.title;
                if (isValid) {
                    $http.post('/addComment',$scope.tourist).success(function(data){
                        if(data.status == 1){
                            console.log(data.data)
                            $scope.responseSuccess = data.info;
                            $scope.responseErr = "";
                            $scope.feedback.push.call( $scope.feedback,data.data);
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