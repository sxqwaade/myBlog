var DaoBase = require('./DaoBase'),
    models = require('./../models'),
    Tourist = models.Tourist;

var TouristDao = new DaoBase(Tourist);

module.exports = TouristDao;