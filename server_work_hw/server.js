const express = require("express");
const usersRouter = require("./routers/usersRouter");

const app = express();
const PORT = 3000;

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
