const {Schema, model, ObjectId} = require("mongoose")


const File = new Schema({
    name: {type: String, required: true},
    name: {type: String, required: true},
    accesslink: {type: String},
    size: {type: Number, default: 0},
    path: {type: String, default:""},
    user: {type: ObjectId, ref:"User"},
    parent:{type: ObjectId, ref:"File"},
    children : [{type: ObjectId, ref:"File"}]
})

module.exports = model("File", File)