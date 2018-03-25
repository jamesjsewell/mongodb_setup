const mongoose = require("mongoose")
const password = require("./db_admin").admin_password

process.env.MONGODB_URI = `mongodb://jamesjsewell:${password}@cluster0-shard-00-00-cants.mongodb.net:27017,cluster0-shard-00-01-cants.mongodb.net:27017,cluster0-shard-00-02-cants.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`

module.exports = {
    connectToDB: function(projectName) {
        console.log("running db-setup")
        
        mongoose.connect(process.env.MONGODB_URI, (err, db) => {
            if (err) {
                console.log(err)
            } else {
                console.log(
                    "\n\n===== Connected to: " + 'mongodb' + "=====\n\n"
                )
            }
        })
        
        console.log("finished setup")
    }
}