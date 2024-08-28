const { Router } = require("express");
const userController = require("../controllers/usersController");
const { NotFoundCRUD } = require("../errors/userErrors");
const usersRouter = new Router();

usersRouter.get("/", userController.getAllUsers);
usersRouter.all("*", (req, res, next) => {
  next(new NotFoundCRUD());
});

module.exports = usersRouter;
