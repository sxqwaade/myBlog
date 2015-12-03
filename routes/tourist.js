var TouristDao = require("../dao/TouristDao.js"),
    TouristModel = require("../models").Tourist;

exports.addComment = function(req,res){
    TouristDao.create(new TouristModel({name:req.body.name,email:req.body.email,site:req.body.site,text:req.body.text,comment_id:req.body.comment_id}),function(data,err){
        return !data ? res.json({status:0,err:err}) : res.json({status:1,info:"success"});
    });
};
exports.getComment = function(req,res){
    TouristDao.getByQuery({comment_id:req.body.comment_id},function(err,data){
        res.json(data);
    });
};