'use strict';
define(['../app',
    '../providers/markdownConverter',
    'angularSanitize'], function ( app ) {

    app.directive('btfMarkdown',['$sanitize','markdownConverter',function ($sanitize, markdownConverter) {

        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                if (attrs.btfMarkdown) {
                    scope.$watch(attrs.btfMarkdown, function (newVal) {
                        var html = newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : '';
                        element.html(html);
                    });
                } else {
                    console.log(element.text())
                    var html = $sanitize(markdownConverter.makeHtml(element.text()));
                    element.html(html);
                }
            }
        };
    }]);

});