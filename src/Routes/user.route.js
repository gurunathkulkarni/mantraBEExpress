const express = require("express");
const {
  createUserController,
  userGet,
  getUserById,
  updateUserontroller
} = require("../Controllers/user.controller");
const userRouter = express.Router();
userRouter.get("/user", (req, res) => {
  userGet(req, res);
});

userRouter.post("/user", (req, res) => {
  createUserController(req, res);
});

userRouter.get("/user/:id", (req, res) => {
  getUserById(req, res);
});
userRouter.put("/user/:id", (req, res) => {
  updateUserontroller(req, res);
});

module.exports = userRouter;
