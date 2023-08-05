const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(console.log("DB Connection is established successfully"))
    .catch( (error) => {
        console.log("DB Connection is facing Server Issue");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;