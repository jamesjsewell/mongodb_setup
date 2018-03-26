# mongodb_setup
mongodb setup with a functional boilerplate rest api integration through mongoose.js

#### npm run dev #### 
* ^starts the dev server

you'll need to create a db_admin.js file in the 'backend' directory and add
module.exports = {
  admin_password: 'your mongodb cluster password '
}

--- to it if you chose to use Mongodb Atlas, I have chosen to work that way, i just decided to keep the admin file
out of my source code for obvious reasons
