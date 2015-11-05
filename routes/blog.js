

var BlogDao = require("../dao/Blogdao.js"),
    BlogModel = require("../models").Blog;
exports.list = function (req, res) {
    BlogDao.getAll(function(err, blogs) {
        //res.render('blog', { title:'NJBlog.',data:blogs });
        res.send(blogs);
    });

};
exports.create = function(req,res){
    BlogDao.create(new BlogModel({title:req.body.title,content:req.body.content}),function(data,err){
        return res.json({data:req.body,err:err});
    });
};

exports.remove = function(req,res){
    BlogDao.delete(BlogModel.findOne({_id:req.body._id}),function(err){
        res.json({data:"success"});
    });
};