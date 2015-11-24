'use strict';
//TODO Define module
define(['../app', 'i18n!resources/nls/res', '../../background/images'], function (app, res, images) {
    /* var bgimages=require("../../background/images").imageurls;*/

    return app.controller('LayoutController', function ($scope, $http) {
            $(".navbar-nav li").click(function(){
                $(".navbar-nav li").removeClass('active');
                $(this).addClass('active');
            });

    });
});