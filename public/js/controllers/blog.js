
define(['i18n!resources/nls/res','jquery'],function(res,$){
    var BlogController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){

            $scope.blog={
                title:"",
                content:""
            };

            $scope.createClick=function(){
                $http.post('/blog',$scope.blog).success(function(data){
                    if(data.err){
                        return $scope.err = data.err;
                    }
                });
            };
        }];

    return BlogController;
});