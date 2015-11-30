
define(['i18n!resources/nls/res','../directives/markDown'],function(res,$){
    var AboutmeController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){
            $http.get('/getaboutme').success(function(data){
                $scope.text = data;
            });
        }];

    return AboutmeController;
});