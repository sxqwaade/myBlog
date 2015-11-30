var DaoBase = require('./DaoBase'),
    models = require('./../models'),
    tagsModel = models.Tags;

var Tags = new DaoBase(tagsModel);

module.exports = Tags;