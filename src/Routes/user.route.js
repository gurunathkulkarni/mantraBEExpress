const express = require("express");
const {
  createUserController,
  userGet,
  getUserById,
  updateUserById,
  getUserByPhoneNumber,
} = require("../Controllers/user.controller");
const { Appconfig } = require("../utils/config");
const userRouter = express.Router();

userRouter.get("/config", (req, res) => {
  res.send(Appconfig);
});
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
  updateUserById(req, res);
});

userRouter.get('/user/:phoneNumber/isExist', (req,res) => {
  getUserByPhoneNumber(req, res);
})

module.exports = userRouter;
