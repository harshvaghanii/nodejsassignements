const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

const users = [];

router.get("/add-user", (req, res, next) => {
  res.render("add-users", {
    path: "/admin/add-user",
    title: "Add a user",
  });
});

router.post("/add-user", (req, res, next) => {
  const user = req.body.user;
  users.push(user);
  res.status(302).redirect("/");
});

exports.router = router;
exports.users = users;
