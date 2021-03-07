const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const debug = require("debug")("get-you-rang");

/* GET home page. */
router.get("/", function (req, res) {
  "use strict";
  res.render("index", {
    title: "Call You Rang",
  });
});

//Error: First argument to verifyIdToken() must be a Firebase ID token string.
router.get("/you-rang", function (request, response) {
  debug("TYPE", typeof request.query.token);
  fetch("http://172.29.149.179:30027/you-rang")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      response.send(json);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
