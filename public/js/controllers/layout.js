'use strict';
//TODO Define module
define(['../app', 'i18n!resources/nls/res','../../background/images','../directives/bnLazySrc','../directives/myEnter'], function (app, res,images) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function ($scope,$rootScope, $http,$location) {
        $(".navbar-nav li").click(function(){
            $(".navbar-nav li").removeClass('active');
            $(this).addClass('active');
        });


        var imgs = images.imageurls,
            randombg = function(){return Math.round(Math.random()*(imgs.length - 1));};

        m$.Image.preLoadImages(imgs.slice(0,4));

        $rootScope.filterbytag = function(tag){
            var data={};
            if(tag == ""){
                $scope.filtererror = false;
                $rootScope.showall();
                return false
            }
            if(!$rootScope.tags[tag]){
                data = {
                    title:tag
                }
            }else{
                data = {
                    tagname:tag
                }
            }
            $http.post('/filtertag',data).success(function(response){
                if(response == ""){
                    $scope.filtererror = true;
                    return false
                }
                $scope.filtererror = false;
                for(var i = 0;i<response.length;i++){
                    response[i].bg = imgs[randombg()];
                }
                $rootScope.bloglist = response;
                $rootScope.currentTag = tag;
                $location.path("/");
            });
        };

        $rootScope.showall = function(){
            $rootScope.currentTag = 'all';
            $http.get("/bloglist").success(function(response){
                for(var i = 0;i<response.bloglist.length;i++){
                    response.bloglist[i].bg = imgs[randombg()];
                }
                $rootScope.bloglist = response.bloglist;
                $rootScope.totalnum = response.bloglist.length;
                $location.path("/");
            });
        };

        $http.get("/bloglist").success(function(response){
            for(var i = 0;i<response.bloglist.length;i++){
                response.bloglist[i].bg = imgs[randombg()];
            }
            $rootScope.bloglist = response.bloglist;
            $rootScope.tags = response.tag;
            $rootScope.totalnum = response.bloglist.length;
        });

        $http.get("/newestComment").success(function(data){
            $rootScope.newestComment = data;
        });
    });
});