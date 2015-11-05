var DaoBase = require('./DaoBase'),
    models = require('./../models'),
    Blog = models.Blog;

var Blogdao = new DaoBase(Blog);

module.exports = Blogdao;