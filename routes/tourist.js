var TouristDao = require("../dao/TouristDao.js"),
    TouristModel = require("../models").Tourist;

exports.addComment = function(req,res){
    TouristDao.getByQuery({name:req.body.name,comment_id:req.body.comment_id},function(err,data){

        if(data.length > 0 ){
            var length = data.length-1;
            var limit_time = new Date().getTime() - data[length].create_time.getTime();
            if(limit_time > 60){
                TouristDao.create(new TouristModel({name:req.body.name,email:req.body.email,site:req.body.site,text:req.body.text,comment_id:req.body.comment_id,title:req.body.title}),function(data,err){
                    return !data ? res.json({status:0,err:err}) : res.json({status:1,info:"提交成功",data:data});
                });
            }else{
                return res.json({status:0,info:"评论太快，请休息一下"});
            }
        }else{
            TouristDao.create(new TouristModel({name:req.body.name,email:req.body.email,site:req.body.site,text:req.body.text,comment_id:req.body.comment_id,title:req.body.title}),function(data,err){
                return !data ? res.json({status:0,err:err}) : res.json({status:1,info:"提交成功",data:data});
            });
        }
    });
};
exports.getComment = function(req,res){
    TouristDao.getByQuery({comment_id:req.query.comment_id},function(err,data){
        res.json(data);
    });
};

exports.getNewest = function(req,res){
    TouristDao.getAll(function(err,data){
        if(data.length > 4){
            res.json(data.slice(-4));
        }else{
            res.json(data);
        }

    });
};