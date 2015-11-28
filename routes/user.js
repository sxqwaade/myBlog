/*
 * GET users listing.
 */

var UsersModel = require("./../models").Users;
var path = require('path');

exports.index= function(req,res){
  res.send("respond with a resource");
};

exports.list = function (req, res) {
  res.send("123123123");
};

exports.create = function (req, res) {
  var createUser = new UsersModel(req.body);
  UsersModel.findOne({name:req.body.name}, function (err, user) {
    if (err)
      return res.json({err:err});
    if (user) {
      return res.json({err:"用户名已经存在"});
    }
    createUser.save(function (err, user) {
      if (err) {
        return res.json({err:err});
      }
      req.session["user"] = user;
      res.json({status:1,info:"注册成功"});
    });
  });

};

exports.login = function (req, res) {
  UsersModel.findOne({name:req.body.name}, function (err, user) {
    if (err)
      return res.json({err:err});
    if (!user) {
      return res.json({err:'用户名不存在'});
    }
    if (!user.authenticate(req.body.password))
      return res.json({err:'密码错误'});
    req.session["user"] = user;
    res.json({user:user,status:1,info:"登陆成功"});
    //console.log(req.session)
  });
};

exports.logout = function (req, res) {
  req.session["user"] = null;
  var html = path.normalize(__dirname + '/../views/layout.jade');
  res.sendfile(html);
};
