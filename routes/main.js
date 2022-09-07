const express = require("express");
const router = express.Router();
const data = require("./admin");

router.get("/", (req, res, next) => {
  res.status(200).render("index", {
    users: data.users,
  });
});

exports.router = router;
