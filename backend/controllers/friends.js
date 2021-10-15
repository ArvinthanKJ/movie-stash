const { json } = require("body-parser");
const bodyParser = require("body-parser");
//const bcrypt=require('bcrypt')
const express = require("express");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

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
  var reqColl = [];
  //Routes
  app.get("/findpeople", async (req, res) => {
    var existFriends = [];
    await Members.findOne({ _id: req.query.user }, (err, docs) => {
      existFriends = docs.friends;
    });
    await Members.find({}, (err, docs) => {
      if (docs != null) {
        console.log("pppppppppppp");
        console.log(docs);
        var tempMembers = [];
        var tempv;
        docs.forEach(async (data) => {
          var flagg = 1;
          existFriends.forEach((element) => {
            if (element == data._id) flagg = 0;
          });
          console.log(">>>>>>>>>>>>>>>>>>>>..");
          console.log(flagg);
          if (flagg == 1) {
            tempv = {
              name: data.name,
              _id: data._id,
            };
            tempMembers.push(tempv);
          }
        });
        console.log(tempv);
        res.send(tempMembers);
      }
    });
  });
  app.post("/findpeople", async (req, res) => {
    var us = req.body.user;
    await Members.updateOne({ _id: req.body.tar }, { $push: { requests: us } });
    res.redirect("back");
  });

  app.get("/requests", async (req, res) => {
    await Members.findOne({ _id: req.query.user }, async (err, docs) => {
      if (docs != null) {
        var tempr;
        var x = docs.requests;
        console.log(docs.requests);
        reqColl = [];
        console.log(x);
        x.forEach(async (element) => {
          await Members.findOne({ _id: element }, async (err, doc) => {
            console.log(doc);
            tempr = {
              name: doc.name,
              _id: doc._id,
              public: doc.public,
            };
            reqColl.push(tempr);
          });
          console.log("+++++++++++++++++++");
          console.log(reqColl);
          res.send(reqColl);
        });
      }
    });
  });
  app.post("/requests", async (req, res) => {
    if (req.body.flag == 0) {
      await Members.updateOne(
        { _id: req.body.user },
        { $push: { friends: req.body.tar }, $pull: { requests: req.body.tar } }
      );
    } else
      await Members.updateOne(
        { _id: req.body.user },
        { $pull: { requests: req.body.tar } }
      );
  });

  app.get("/publicf", async (req, res) => {
    console.log(req.query.user);
    await Members.findOne({ _id: req.query.user }, (err, docs) => {
      res.send(docs.public);
    });
  });
  //you are supposed to get all friends data in an array and pass it
  app.get("/friendlist", async (req, res) => {
    console.log(req.query.user);
    var temp;
    await Members.findOne({ _id: req.query.user }, (err, docs) => {
      temp = {
        name: docs.name,
        _id: docs._id,
        watched: docs.watched,
        bucket: docs.bucket,
        public: docs.public,
      };
      res.send(te);
    });
  });
};
