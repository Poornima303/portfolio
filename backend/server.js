const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://poornima:<poorni123>@cluster0.dlajrb0.mongodb.net/")

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});

app.get("/", (req, res) => {

    res.send("Backend Working");

});

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});