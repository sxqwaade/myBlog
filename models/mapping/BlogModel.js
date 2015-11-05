var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    title:{type:String},
    content:{ type:String },
    author_id:{ type:Schema.ObjectId },
    top:{ type:Boolean, default:false },
    reply_count:{ type:Number, default:0 },
    visit_count:{ type:Number, default:0 },
    collect_count:{ type:Number, default:0 },
    create_at:{ type:Date, default:Date.now },
    update_at:{ type:Date, default:Date.now },
    last_reply:{ type:Schema.ObjectId },
    last_reply_at:{ type:Date, default:Date.now },
    content_is_html:{ type:Boolean }
});

mongoose.model('Blog',schema);