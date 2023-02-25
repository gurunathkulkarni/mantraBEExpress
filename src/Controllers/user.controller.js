const { createUser, userGet, getById, updateUser, getUserByPhoneNumber } = require("../Services/user.service");
const { sendResponse } = require("../utils/helper");
exports.userGet = async (req, res) => {
  try {
    const userData = await userGet();
    res.send(userData);
  } catch (err) {
    console.log("COntroller", err);
    res.send({ error: err });
  }
};

exports.createUserController = async (req, res) => {
  try {
    const createdData = await createUser(req.body);
    res.send(createdData);
  } catch (err) {
    return sendResponse(res, 500, 'error', {},err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const GetById = await getById(id);
    res.send(GetById);
  } catch (err) {
    return sendResponse(res, 500, 'error', {},err);
  }
};
exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const reqObj = {
      id,
      obj: req.body
    }
    const updateUserById = await updateUser(reqObj);
    sendResponse(res, 200, updateUserById.message, updateUserById);
  } catch (err) {
    return sendResponse(res, 500, 'error', {},err);
  }
};

exports.getUserByPhoneNumber = async (req,res) => {
  try {
    const { phoneNumber } = req.params
    console.log('phoneNumber', phoneNumber);
    const response = await getUserByPhoneNumber(phoneNumber);
    res.send(response);
  } catch (err) {
    return sendResponse(res, 500, 'error', {},err);
  }
}

const deleteUser = async (req, res) => {};
