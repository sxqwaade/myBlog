

var BlogDao = require("../dao/Blogdao.js"),
    BlogModel = require("../models").Blog;
exports.list = function (req, res) {
    BlogDao.getAll(function(err, blogs) {
        //res.render('blog', { title:'NJBlog.',data:blogs });
        var arr = [],obj={};
        for(var i=0;i<blogs.length;i++){
            (function(index){
                BlogDao.countByQuery({tag:blogs[index].tag},function(err,data){
                    eval('obj.'+blogs[index].tag+'='+data+'')
                    if(index == blogs.length-1){
                        return res.send({bloglist:blogs,tag:obj});
                    }
                });
            })(i);
        }
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
        if(!err){
            res.json({status:1,info:"success"});
        }
    });
};

exports.remove = function(req,res){
    BlogDao.delete(BlogModel.findOne({_id:req.body._id}),function(err){
        res.json({data:"success"});
    });
};

exports.filter=function(req,res){
    if(!req.body.title){
        BlogDao.getByQuery({tag:req.body.tagname},function(err,data){
            res.json(data);
        });
    }else{
        BlogDao.getByQuery({title:req.body.title},function(err,data){
            res.json(data);
        });
    }

};