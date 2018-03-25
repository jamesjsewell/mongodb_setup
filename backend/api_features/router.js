const express = require("express")

// initializes main router
const apiRoutes = express.Router()

// import routes
const itemRoutes = require("./example_feature/itemRoutes.js")

// sets subroutes of the main api route
apiRoutes.use("/example_route", itemRoutes)

module.exports = apiRoutes