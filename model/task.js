const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({   
    email:{type:String, default:null},
    desc:{type:String, default:null},
    from:{type:String, default:null},
    to:{type:String, default:null}
});

module.exports = User = mongoose.model('Task', taskSchema);