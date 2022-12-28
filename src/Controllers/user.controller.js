const { createUser, userGet, getById } = require("../Services/user.service");
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
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUserById = await getUserById(id);
  } catch (err) {
    return res.send({ error: err });
  }
};

const deleteUser = async (req, res) => {};
