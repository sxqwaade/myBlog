'use strict';

define(['i18n!resources/nls/res','jquery'],function(res,$){
    var BlogController = ['$scope','$rootScope','$http','$location',
        function($scope,$rootScope,$http,$location){

            $scope.blog={
                title:"",
                content:""
            };

        }];

    return BlogController;
});