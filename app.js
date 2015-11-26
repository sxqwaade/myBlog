/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes/routes')
    , http = require('http')
    , path = require('path')
    , fs = require('fs')
    , favicon = require('serve-favicon')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , methodOverride = require('method-override')
    , session = require('express-session')
    , serveStatic = require('serve-static')
    , errorhandler = require('errorhandler')
    , colors = require('colors');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //app.use(express.favicon());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());
    app.use(cookieParser('your secret here'));
    app.use(session());
    //app.use(app.router);
    app.use(serveStatic(__dirname+'/public/'));
  /*  app.use(express.static(path.join(__dirname, 'resources')));
   app.use(express.static(path.join(__dirname, 'views/partials')));*/
});

if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}

routes(app);

http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});
