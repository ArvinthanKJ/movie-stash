/*const { json } = require("body-parser");
const bodyParser = require("body-parser");
const bcrypt=require('bcrypt')

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);*/
const express = require("express");

module.exports = function (app) {
  app.use(express.urlencoded({ extended: false }));

  //Database MongoDB

  const mongoose = require("mongoose");
  const Members = require("../models/members.js");
  mongoose.connect("mongodb://localhost/deltaProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made with the databse");
    })
    .on("error", function (error) {
      console.log("Connection error:", error);
    });

  //Routes

  app.post("/register", async (req, res) => {
    tempRegister = await new Members({
      name: req.body.user.name1,
      email: req.body.user.email,
      password: req.body.user.password,
    });
    tempRegister.save();
    console.log("registered..success");
    console.log(req.body);
  });

  app.post("/login", async (req, res) => {
    var email1 = req.body.user.email;
    await Members.findOne({ email: email1 }, function (err, docs) {
      if (err) console.log("dsjfbkjwbshjkbwdkjbvhbw");

      if (docs == null) {
        console.log("failure");

        //res.redirect("/error");
      } else if (docs.password === req.body.user.password) {
        console.log("Sucess login");
        global.userId = docs._id;
        res.send(userId);
        // res.redirect("/dashboard");
      } else {
        console.log("failure");
        res.send(null);
        //res.redirect("/login");
      }
    });
  });
};
