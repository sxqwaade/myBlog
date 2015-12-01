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
var blog = require('./blog');
var tags = require('./tags');

module.exports = function(app){
    app.get('/', homepage.index);
    app.get('/tagslist',tags.list);
    app.post('/addtags',tags.add);
    app.post('/removetags',tags.remove);
    app.get('/getaboutme',admin.getaboutme);
    app.post('/editAboutme',admin.editAboutme);
    app.get('/admin',admin.index);
    app.get('/checklogin',admin.getLoginUser);
    app.post('/signup',user.create);
    app.post('/login',user.login);
    app.get('/logout', user.logout);
    app.post('/addblog',blog.create);
    app.post('/blogupdate',blog.edit);
    app.post('/blogremove',blog.remove);
    app.get('/bloglist',blog.list);
    app.post('/blogdetail',blog.detail);
    app.post("/filtertag",blog.filter);
};