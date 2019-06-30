const mongoose = require("mongoose")

const fieldSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min:8
    },
    address:{
        type: String
    }
})

let field = mongoose.model("user", fieldSchema)

module.exports = field
