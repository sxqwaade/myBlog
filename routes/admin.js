var path = require('path'),
    AboutmeDao = require('../dao/AboutmeDao.js'),
    AboutModel = require('../models').Aboutme;

exports.index = function(req,res){
    var html = path.normalize(__dirname + '/../views/backend.jade');
    res.render('backend', {});
};

exports.editAboutme = function(req,res){

    AboutmeDao.create(new AboutModel({content:req.body.text}),function(data,err){
        return res.json({data:"success",err:err});
    });
};

exports.getaboutme = function(req,res){
    AboutmeDao.getAll(function(err,data){
        var length = data.length-1;
        res.send(data[length].content);
    });
};