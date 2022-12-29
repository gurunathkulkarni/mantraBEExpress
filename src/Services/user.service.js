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
exports.updateUserService = async (req) => {
try{
  console.log("before update",req);
  const { id, name,phoneNUmber,gender,password,userType,settings} = req;

    const existedUser= await userModel.findById(id);
    if (!existedUser) {
        return { message: 'User not found' };
    }
    const updatedUser = await userModel.updateOne({_id:id}, {name,phoneNUmber,gender,password,userType,settings});
    console.log("after update",updatedUser);
    return updatedUser;
}catch(err){
  console.log("before  catch",err);

return err
}

};

const deleteUser = async (req, res) => {};
