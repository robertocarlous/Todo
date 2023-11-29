const {Schema} = require("mongoose");
const mongoose = require("mongoose");
const TodoSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    descriprion:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    
});

module.exports = mongoose.model("todo", TodoSchema);
