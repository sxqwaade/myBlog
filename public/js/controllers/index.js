'use strict';

define([ 'i18n!resources/nls/res','jquery','../../background/images'], function (res,$,images) {

    var  IndexController=['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location) {
        $rootScope.showall();
    }];

    return IndexController;
});
