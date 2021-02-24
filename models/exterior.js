const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exteriorSchema = new Schema({
    mainColor: {
        type: String,
    },
    trimColor: {
        type: String,
    }
})
module.exports = mongoose.model("Exterior", exteriorSchema)