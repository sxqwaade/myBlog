
define(['i18n!resources/nls/res','../directives/markDown'],function(res,$){
    var AboutmeController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){
            $rootScope.start();
            $http.get('/getaboutme').success(function(data){
                $scope.text = data;
                $rootScope.complete();
            });
        }];

    return AboutmeController;
});