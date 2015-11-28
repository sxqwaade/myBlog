var path = require('path'),
    AboutmeDao = require('../dao/AboutmeDao.js'),
    AboutModel = require('../models').Aboutme;

exports.index = function(req,res){
    var html = path.normalize(__dirname + '/../views/backend.jade');
    res.render('backend', {});
};

exports.getLoginUser=function(req,res){
    //console.log(req.session);
    res.json(req.session["user"] || {status:0,info:"未登录"});
};

exports.editAboutme = function(req,res){
    if("undefined" == typeof req.body.text ){
        AboutmeDao.getByQuery({name:"aboutme"},function(error,data){
            return res.json({data:"success",text:data});
        });
    }else{
        AboutmeDao.countByQuery({name:"aboutme"},function(err,data){
            console.log(data)
            if(data == 0){
                AboutmeDao.create(new AboutModel({name:"aboutme",text:req.body.text}),function(){
                    return res.json({status:1,info:"success"});
                });
            }else{
                AboutmeDao.update({name:req.body.name,content:req.body.text},function(err,data){
                    return res.json({data:"success",text:data});
                });
            }
        });
    }
};

exports.getaboutme = function(req,res){
    AboutmeDao.getAll(function(err,data){
        var length = data.length-1;
        res.send(data[length].content);
    });
};