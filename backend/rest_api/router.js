const express = require("express");

// initializes main router
const apiRoutes = express.Router();

// import routes
const itemRoutes = require("./routes/items.js")
	
// sets subroutes of the main api route
apiRoutes.use("/items", itemRoutes)

module.exports = apiRoutes;