

var BlogDao = require("../dao/TagsDao.js"),
    BlogModel = require("../models").Tags;

exports.list = function (req, res) {
    BlogDao.getByQuery({title:"blogtag"},function(err, tags) {
        var arr = [];
        for(var i=0;i<tags.length;i++){
            arr.push(tags[i].tagname);
        }
        return res.send({tagname:arr,status:1,info:"success"});
    });
};

exports.add = function (req, res) {
    BlogDao.create(new BlogModel({title:"blogtag",tagname:req.body.tagname}),function(tags) {
        return res.send({status:1,info:"success"});
    });
};

exports.remove = function (req, res) {
    BlogDao.delete({tagname:req.body.tagname},function(doc) {
        return res.send({status:1,info:"success"});
    });
};