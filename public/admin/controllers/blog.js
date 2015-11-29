define(['jquery','../config/httpprovider'],function($){

    var blogController = ['$scope','$rootScope','$http','$location',function($scope,$rootscope,$http,$location){
        $http.get('/checklogin').success(function(response){
            if(response.status == 0){
                $location.path("/login");
            }else{
                $location.path("/blog");
            }
        });
        /*$http.post("/bloglist").success(function(data){
            var text = data.text[0].content;
            $scope.aboutmeText = text;
        });

        $scope.submit=function(){

        }*/
    }];

    return blogController;
});