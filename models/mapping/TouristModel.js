var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name:{type:String},
    email:{type:String},
    site:{type:String},
    text:{type:String},
    comment_id:{type:String},
    create_time:{type:Date, default:Date.now}
});

mongoose.model('Tourist',schema);