const express = require("express"),
bodyParser = require("body-parser"),
appMiddleWare = require("./middleware.js")

// connect to the database
const connectToDB = require("./db_config.js").connectToDB    
connectToDB("test_project")

// run app
var app = express()
const PORT = process.env.PORT || 3000
app.set("port", PORT)

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(appMiddleWare.parseQuery)


// import routers
let router = require("./rest_api/router.js")

// router
app.use("/api", router)

app.listen(PORT, function() {
	console.log(
		"\n\n===== listening for requests on port " + PORT + " =====\n\n"
	)
})

app.get("*", (req, res)=>{ res.send("hello world") })

// for single page apps

// app.get("*", function(req, res, next) {
// 	if (!req.url.includes("api")) {
// 		app.use(fallback(process.env.ROOT_DIR + "/views/index.html"))
// 	}
// 	return next()
// })
