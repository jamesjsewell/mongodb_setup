const express = require("express"),
	bodyParser = require("body-parser")

// connect to the database
const connectToDB = require("./db_config.js").connectToDB
connectToDB("test_project")

// runs express app and sets defined port
var app = express()
const PORT = process.env.PORT || 3000
app.set("port", PORT)

// middleware, transforms http request so that you can use req.body json format 
// for accepting json data from http requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// import sub routers for CRUD api
let router = require("./api_features/router.js")

// base router for CRUD api
app.use("/api", router)

// starts the app listening for requests
app.listen(PORT, function () {
	console.log(
		"\n\n===== listening for requests on port " + PORT + " =====\n\n"
	)
})

// for single page apps

// app.get("*", function(req, res, next) {
// 	if (!req.url.includes("api")) {
// 		app.use(fallback(process.env.ROOT_DIR + "/views/index.html"))
// 	}
// 	return next()
// })
