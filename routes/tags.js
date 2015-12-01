

var TagsDao = require("../dao/TagsDao.js"),
    TagsModel = require("../models").Tags;

exports.list = function (req, res) {
    TagsDao.getByQuery({title:"blogtag"},function(err, tags) {
        var arr = [];
        for(var i=0;i<tags.length;i++){
            arr.push(tags[i].tagname);
        }
        return res.send({tagname:arr,status:1,info:"success"});
    });
};

exports.add = function (req, res) {
    TagsDao.create(new TagsModel({title:"blogtag",tagname:req.body.tagname}),function(tags) {
        return res.send({status:1,info:"success"});
    });
};

exports.remove = function (req, res) {
    TagsDao.delete({tagname:req.body.tagname},function(doc) {
        return res.send({status:1,info:"success"});
    });
};