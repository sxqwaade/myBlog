/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/23/13
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */

var homepage = require('./index');
var admin = require('./admin');
var user = require('./user');

module.exports = function(app){
    app.get('/', homepage.index);
    app.get('/getaboutme',admin.getaboutme);
    app.post('/editAboutme',admin.editAboutme);
    app.get('/admin',admin.index);
    app.post('/signup',user.create);
    app.post('/login',user.login);
    app.get('/logout', user.logout);
    app.get('/checklogin',admin.getLoginUser);
};