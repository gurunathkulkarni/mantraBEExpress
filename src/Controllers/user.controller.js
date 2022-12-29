const { createUser, userGet, getById, updateUserService} = require("../Services/user.service");
const { sendResponse } = require("../utils/helper");
exports.userGet = async (req, res) => {
  try {
    const userData = await userGet();
    res.send(userData);
  } catch (err) {
    res.send({ error: err });
  }
};

exports.createUserController = async (req, res) => {
  try {
    const createdData = await createUser(req.body);
    res.send(createdData);
  } catch (err) {
    return res.send({ error: err });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const GetById = await getById(id);
    res.send(GetById);
  } catch (err) {
    return res.send({ error: err });
  }
};

exports.updateUserontroller = async (req, res) => {
  try {
      const { id } = req.params;
      const { name,phoneNUmber,gender,password,userType,settings } = req.body;
      console.log("update",req.body);
      const updatedUser = await updateUserService({id, name,phoneNUmber,gender,password,userType,settings});
      if(updatedUser.modifiedCount >0){
        return sendResponse(res, 200, "updated successfully", updatedUser);
      }else{
    return sendResponse(res, 500, '', {} ,updatedUser);

      }
  } catch (err) {
    return sendResponse(res, 500, '', {} ,err);
  }
}
    


const deleteUser = async (req, res) => {};
