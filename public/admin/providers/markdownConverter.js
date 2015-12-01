'use strict';
define(['../app','showdown'],function(app){
    app.provider('markdownConverter', function () {
        var opts = {};
        return {
            config: function (newOpts) {
                opts = newOpts;
            },
            $get: function () {
                return new Showdown.converter(opts);
            }
        };
    });
});