define(['jquery','../config/httpprovider'],function($){

    var aboutmeController = ['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){

        $rootScope.ajaxloading = true;

        $http.post("/editAboutme").success(function(data){
            $rootScope.ajaxloading = false;

            var text = data.text[0].content;
            $scope.aboutmeText = text;
        });

        $scope.submit=function(){
            var req = {
                method: 'post',
                url: '/editAboutme',
                data: { name:"aboutme",text: $scope.aboutmeText }
            };
            $http(req).success(function(data){
                $scope.success = "提交成功";
                $scope.errinfo = "";
            }).error(function(){
                $scope.errinfo = "提交失败";
                $scope.success = "";
            });
        }
    }];

    return aboutmeController;
});