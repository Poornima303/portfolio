const Contact = require("./models/Contact");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://poornima:poorni123@ac-8i3l7xb-shard-00-00.dlajrb0.mongodb.net:27017,ac-8i3l7xb-shard-00-01.dlajrb0.mongodb.net:27017,ac-8i3l7xb-shard-00-02.dlajrb0.mongodb.net:27017/?ssl=true&replicaSet=atlas-bg69kw-shard-0&authSource=admin&appName=Cluster0")

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});

app.get("/", (req, res) => {

    res.send("Backend Working");

});
app.post("/contact", async (req, res) => {

    try {

        const newContact = new Contact(req.body);

        await newContact.save();

        res.send("Message Saved");

    } 
    
    catch (error) {

        console.log(error);

        res.send("Error");

    }

});

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});