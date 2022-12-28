const userModel = require("../Modules/user.module");

exports.userGet = async (req, res) => {
  try {
    const getData = await userModel.find();
    return getData;
  } catch (err) {
    console.log("service", err);

    return err;
  }
};

exports.createUser = async (obj) => {
  try {
    // const {name,phoneNUmber,gender,password,userType,settings}=obj
    const createdData = await userModel.create(obj);
    return createdData;
  } catch (err) {
    return err;
  }
};

exports.getById = async (id) => {
  try {
    const getUserById = await userModel.findById(id);
    return getUserById;
  } catch (err) {
    return err;
  }
};
const updateUser = async (req, res) => {};

const deleteUser = async (req, res) => {};
