var DaoBase = require('./DaoBase'),
    models = require('./../models'),
    Aboutme = models.Aboutme;

var Abountme = new DaoBase(Aboutme);

module.exports = Abountme;