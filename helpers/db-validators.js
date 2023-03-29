const User = require("../models/user.model");


const userByIdExist = async (id) => {
    const userExist = await User.findById(id);
    if (!userExist) throw new Error(`the Id does not exist`);
  };

  module.exports = {
    userByIdExist,
  };