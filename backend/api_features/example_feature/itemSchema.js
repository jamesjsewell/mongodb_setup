const mongoose = require("mongoose")

// mongoose schema class
const Schema = mongoose.Schema

// instance of mongoose Schema class 
var Item = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
}, { collection: 'items' })

// exports mongoose model to the itemController.js file
module.exports = mongoose.model("Item", Item)