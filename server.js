const express = require('express')
const app = express()

const routes = require('./src/routes/article'); // import the routes



app.use(express.json());

app.use('/', routes); //to use the routes

app.get("/api", (req, res) => {
    res.json({"users":["userOne", "userTwo","userThree"]})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})