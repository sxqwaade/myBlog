var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    title:{type:String,default:'blogtag'},
    tagname:{type:String},
    create_at:{ type:Date, default:Date.now },
    update_at:{ type:Date, default:Date.now },
    content_is_html:{ type:Boolean }
});

mongoose.model('Tags',schema);