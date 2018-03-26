const mongoose = require("mongoose")

// mongoose schema class
const Schema = mongoose.Schema

// instance of mongoose Schema cass aka mongoose model
var Item = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

// exports mongoose model to the itemController.js file
module.exports = mongoose.model("Item", Item)