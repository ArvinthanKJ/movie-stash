const express = require("express");
var cors = require("cors");
app = express();
app.use(cors({}));
app.use(express.json());

const friends = require("./controllers/friends");
const lists = require("./controllers/lists");
const userAunthentication = require("./controllers/userAunthentication");

//app.set('view engine','ejs')
//app.engine('ejs', require('ejs').__express);

userAunthentication(app);
lists(app);
friends(app);
app.use(express.static(__dirname + "/public"));

app.listen(4000, "127.0.0.1");
console.log("reading");
