/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 10:21 AM
 * To change this template use File | Settings | File Templates.
 */
/*//TODO Define module
define(['../app'], function (app) {
    return app.controller('IndexController', function ($scope, $rootScope, $http) {
    $scope.title = "NJBlog";
        $rootScope.title="NJBLog simple ,fluent"
    });

});*/
'use strict';

define([ 'i18n!resources/nls/res','jquery'], function (res,$) {

    var  IndexController=['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location) {
        $scope.title = res.title;
        $rootScope.title= res.title;

        $http.get("/bloglist").success(function(response){
            $scope.bloglist = response.bloglist;
            $scope.tags = response.tag;
            $scope.totalnum = response.bloglist.length;
        });



        $scope.filterbytag = function(tag){
            $scope.currentTag = tag;
            $http.post('/filtertag',{tagname:tag}).success(function(response){
                $scope.bloglist = response;
            });
        };

        $scope.showall = function(){
            $scope.currentTag = 'all';
            $http.get("/bloglist").success(function(response){
                $scope.bloglist = response.bloglist;
                $scope.totalnum = response.bloglist.length;
            });
        }
    }];

    return IndexController;
});

/*define(['app','i18n!resources/nls/res'], function (app,res) {
    return app.controller('IndexController', function ($scope, $rootScope) {
        $scope.title = res.title;
        $rootScope.title= res.title;
    });

});*/
