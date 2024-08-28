const express = require("express");
require("dotenv").config();
const usersRouter = require("./routers/usersRouter");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
