

var BlogDao = require("../dao/Blogdao.js"),
    BlogModel = require("../models").Blog;
exports.list = function (req, res) {
    BlogDao.getAll(function(err, blogs) {
        //res.render('blog', { title:'NJBlog.',data:blogs });
        res.send(blogs);
    });

};
exports.create = function(req,res){
    BlogDao.create(new BlogModel({title:req.body.title,content:req.body.content,tag:req.body.tag}),function(data,err){
        return !data ? res.json({status:0,err:err}) : res.json({status:1,info:"success"});
    });
};

exports.detail=function(req,res){
    BlogDao.getById(req.body.id,function(err,data){
        return res.json({status:1,info:"success",data:data});
    });
};

exports.edit=function(req,res){
    BlogDao.update({_id:req.body.id},{title:req.body.title,content:req.body.content,tag:req.body.tag},function(err){
        res.json(err);
    });
};

exports.remove = function(req,res){
    BlogDao.delete(BlogModel.findOne({_id:req.body._id}),function(err){
        res.json({data:"success"});
    });
};