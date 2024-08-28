const { noUserFound } = require("../errors/userErrors");
const { User } = require("../models/userModel");

const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      if (users.length === 0) {
        throw new noUserFound();
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  },
};

module.exports = userController;
