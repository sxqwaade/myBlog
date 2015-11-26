/*
 * GET home page.
 */

var path = require('path');

exports.index = function(req,res){
  var html = path.normalize(__dirname + '/../views/index.jade');

  res.render('index', { title:'myBlog.' });
};



