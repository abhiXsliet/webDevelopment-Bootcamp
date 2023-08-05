const mongoose = require('mongoose');

require("dotenv").config()

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection is established"))
    .catch( (error) => {
      console.log("Issue in DB connection");
      console.error(error.message);
      //Ishka matlb?
      process.exit(1);
    } );

}

module.exports = dbConnect;