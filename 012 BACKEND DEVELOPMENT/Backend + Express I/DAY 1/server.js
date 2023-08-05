
//server Instantiate
const express = require('express');
const app = express();

//used to parse request.body in express.js -> PUT or POST
const bodyParser = require('body-parser'); //middleware

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 8000 port
app.listen(8000, () => {
    console.log("server started at port no. 8000");
});

//Routes
app.get('/', (request, response) => {
    response.send("Hello Jee, kaise ho saare");
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => {console.log("Connection Successful")} )
.catch( (error) => {console.log("Received an error")} )

