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
  var userID;
  //Database MongoDB

  app.use(express.urlencoded({ extended: false }));

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

  app.post("/search", async (req, res) => {
    var x = req.body.movie.Title;
    var y = req.body.movie.Year;
    var z = req.body.movie.Poster;
    var b = req.body.movie.imdbID;
    var zz = { Title: x, Year: y, Poster: z, imdbID: b };
    if (req.body.flag == 0) {
      await Members.updateOne(
        { _id: req.body.user },
        { $push: { watched: zz } }
      );
    } else if (req.body.flag == 1) {
      await Members.updateOne(
        { _id: req.body.user },
        { $push: { bucket: zz } }
      );
    } else if (req.body.flag == 3) {
      await Members.updateOne(
        { _id: req.body.user },
        { $push: { public: zz } }
      );
    } else if (req.body.flag == 2) {
      await Members.findOne({ _id: req.body.user }, async (err, docs) => {
        if (req.body.flag0 == 1) {
          var temp_list = docs.bucket;
          console.log("=============");
          console.log(req.body.flag0);
          filt = (obj) => {
            console.log(obj);
            console.log(b);
            if (obj.imdbID == b) return false;
            else return true;
          };

          temp_list = temp_list.filter(filt);
          console.log(docs.bucket);
          console.log(temp_list);
          await Members.updateOne(
            { _id: req.body.user },
            { $set: { bucket: temp_list } }
          );
        } else if (req.body.flag0 == 2) {
          var temp_list = docs.watched;
          console.log("=============");
          console.log(req.body.flag0);
          filt = (obj) => {
            console.log(obj);
            console.log(b);
            if (obj.imdbID == b) return false;
            else return true;
          };

          temp_list = temp_list.filter(filt);
          console.log(docs.bucket);
          console.log(temp_list);
          await Members.updateOne(
            { _id: req.body.user },
            { $set: { watched: temp_list } }
          );
        } else if (req.body.flag0 == 3) {
          var temp_list = docs.public;
          console.log("=============");
          console.log(req.body.flag0);
          filt = (obj) => {
            console.log(obj);
            console.log(b);
            if (obj.imdbID == b) return false;
            else return true;
          };

          temp_list = temp_list.filter(filt);
          console.log(docs.public);
          console.log(temp_list);
          await Members.updateOne(
            { _id: req.body.user },
            { $set: { public: temp_list } }
          );
        }
      });
      console.log("=============");
    }
    console.log("contact made");
    console.log(req.body);
  });

  app.get("/bucketlist", async (req, res) => {
    await Members.findOne({ _id: userID }, (err, docs) => {
      if (docs != null) {
        res.send(docs.bucket);
      }
    });
  });
  app.get("/publiclist", async (req, res) => {
    await Members.findOne({ _id: userID }, (err, docs) => {
      if (docs != null) {
        res.send(docs.public);
      }
    });
  });
  app.post("/bucketlist", async (req, res) => {
    userID = req.body.user;
    console.log("xxxxxxxxx");
  });
  app.post("/publiclist", async (req, res) => {
    userID = req.body.user;
    console.log("xxxxxxxxx");
  });
  app.post("/watchedlist", async (req, res) => {
    console.log("thaaaaaaaaaaaaaaa");
    userID = req.body.user;
    console.log("xxxxxxxxx");
  });
  app.get("/watchedlist", async (req, res) => {
    await Members.findOne({ _id: userID }, (err, docs) => {
      if (docs != null) {
        console.log(docs.watched);

        res.send(docs.watched);
      }
    });
  });
};
