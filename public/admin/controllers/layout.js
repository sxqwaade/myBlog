define(['../app'], function (app) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function ($scope, $http) {
        $(".nav-pills li").click(function(){
            $(".nav-pills li").removeClass("active");
           $(this).addClass("active");
        });
    });
});