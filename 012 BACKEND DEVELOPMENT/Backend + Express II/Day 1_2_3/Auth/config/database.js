const mongoose = require('mongoose');

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected successfully"))
    .catch((err) => {
        console.log(`DB CONNECTION ISSUES`);
        console.error(err.message);
        process.exit(1);
    });
}

