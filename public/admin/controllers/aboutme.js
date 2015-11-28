define(['jquery','../config/httpprovider'],function($){

    var aboutmeController = ['$scope','$rootScope','$http','$location',function($scope,$rootscope,$http,$location){
        $http.post("/editAboutme").success(function(data){
            var text = data.text[0].content;
            $scope.aboutmeText = text;
        });

        $scope.submit=function(){
            var req = {
                method: 'POST',
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