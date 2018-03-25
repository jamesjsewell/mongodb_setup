
const express = require("express"),
createItemCont = require("./controllers/createItem.js"),
itemRoutes = express.Router()

itemRoutes.post("/new", createItemCont.postItem)

module.exports = itemRoutes
