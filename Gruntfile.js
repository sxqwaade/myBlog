module.exports = function(grunt) {
    // ����
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/js",
                    paths: {
                        jquery: '../lib/jquery/jquery-1.8.2.min',
                        bootstrap: '../lib/bootstrap/js/bootstrap',
                        underscore: '../lib/underscore/underscore',
                        angular: '../lib/angular/angular',
                        angularResource: '../lib/angular/angular-resource',
                        text: '../lib/require/text',
                        i18n:'../lib/require/i18n',
                        modernizr:'../lib/modernizr',
                        html5shiv:'../lib/html5shiv',
                        mcore:'../lib/mcore.min',
                        fullscreen:'../lib/fullscreen',
                        mcustomscrollbar:'../lib/jquery.mCustomScrollbar.concat.min',
                        detectbrowser:'../lib/detectbrowser'
                        //res:'../resources/nls/res'

                    },
                    shim: {
                        'angular' : {'exports' : 'angular'},
                        'angular-resource' : {deps:['angular']},
                        'bootstrap': {deps:['jquery']},
                        'mcustomscrollbar':{deps:['jquery']},
                        'underscore': {exports: '_'},
                        'detectbrowser':{deps:['modernizr']}
                        /*,
                         'res':{exports:'res'}*/

                    },

                    optimize:"none",
                    name: "main",
                    out: "public/js/main-built.js"

                    //out: "../public/js/main-built.js"
                }
            }
        },
        cssmin: {
            compress: {
                options: {
                    banner: '/* Myblog minified css file */'
                },
                files: {
                    'public/dest/css/myBlog.css': ['public/themes/Wagon/css/bootstrap.min.css','public/themes/Wagon/css/font-awesome.min.css','public/themes/Wagon/css/animate.css','public/themes/Wagon/css/style.css'],
                    'public/dest/css/reset.css':['public/css/reset.css']
                }
            }
        },
        concat : {
            domop : {
                src: 'public/js/*.js',
                dest: 'dest/myBlog.js'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/myBlog.js',
                dest : 'dest/myBlog.min.js'
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/reset.css': 'public/sass/reset.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['public/sass/**/*.scss'],
                tasks: ["sass"], //tasks: ['sass',"concat:kaluli","less"],
                options: {
                    spawn: false,
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['requirejs','cssmin','concat', 'uglify']);
};