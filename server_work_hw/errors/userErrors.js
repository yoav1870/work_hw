class NotFoundCRUD extends Error {
  constructor() {
    super("Not Found");
    this.status = 404;
    this.name = "NotFoundCRUD";
  }
}

class noUserFound extends Error {
  constructor() {
    super("No user found");
    this.status = 404;
    this.name = "noUserFound";
  }
}

module.exports = {
  NotFoundCRUD,
  noUserFound,
};
