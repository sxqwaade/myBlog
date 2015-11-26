define(['jquery','../config/httpprovider'],function($){

    var aboutmeController = ['$scope','$rootScope','$http','$location',function($scope,$rootscope,$http,$location){

        $scope.submit=function(){
            var req = {
                method: 'POST',
                url: '/editAboutme',
                data: { text: $scope.aboutmeText }
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