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

exports.getUserByPhoneNumber = async (phoneNumber) => {
  try {
    const findUserByPhoneNumber = await userModel.find({ phoneNumber });
    console.log('findUserByPhoneNumber', findUserByPhoneNumber);
    if (findUserByPhoneNumber.length === 0) return { message: 'user not found', status: false }
    return { message: 'user found', status: true, data: findUserByPhoneNumber }
  } catch(err) {
    return err;
  }
}

exports.updateUser = async (reqObj) => {
  try {
    const { id, obj } = reqObj;
    const { name, phoneNumber, gender,password, settings } = obj;
    const { fontSize,fontColor,fontLineHeight, disableVideo, autoplayVideo,displayLanguage } = settings;
    const existingUser = await userModel.findById(id);
    if (!existingUser) return { 'message': 'user not found', status: false }

    if (name) existingUser.name = name;
    try {
      if (phoneNumber) existingUser.phoneNumber = phoneNumber;
    } catch (err) {
      return { message: 'phone number already exist' };
    }
    if (gender) existingUser.gender = gender;
    if (password) existingUser.password = password;
    if (fontColor) existingUser.settings.fontColor = fontColor;
    if (fontSize) existingUser.settings.fontSize = fontSize;
    if (fontLineHeight) existingUser.settings.fontLineHeight = fontLineHeight;
    if (disableVideo) existingUser.settings.disableVideo = disableVideo;
    if (autoplayVideo) existingUser.settings.autoplayVideo = autoplayVideo;
    if (displayLanguage) existingUser.settings.displayLanguage = displayLanguage;

    try {
      await existingUser.save();
    }catch (err) {
      return { message: 'phone number already exist', status: false };
    }
   
    return { message: 'updated successfully', data: existingUser }
  } catch(err) {
    return err
  }
};

const deleteUser = async (req, res) => {};
