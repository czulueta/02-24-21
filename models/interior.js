const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    livingRoom: {
        type: String,
    },
    hallway: {
        type: String,
    },
    bedroom: {
        type: String,
    },
    bathroom: {
        type: String,
    },
    masterbedroom: {
        type: String,
    }
})
module.exports = mongoose.model("Interior", interiorSchema)