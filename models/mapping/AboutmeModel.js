var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    content:{ type:String },
    create_at:{ type:Date, default:Date.now },
    update_at:{ type:Date, default:Date.now },
    content_is_html:{ type:Boolean }
});

mongoose.model('Aboutme',schema);