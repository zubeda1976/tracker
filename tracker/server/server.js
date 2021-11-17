const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const morgan = require("morgan");
//connect to db
const { connectTodb } = require("./db/config.js");
connectTodb();

//routes
const courseWorkRouter = require("./routes/courseWorkRoute.js");
const cityRouter = require("./routes/cityRoute.js");
const loginRouter = require("./routes/loginRoute.js");

//port
const port = process.env.PORT;

//middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use("/coursework", courseWorkRouter);
app.use("/cityroute", cityRouter);
app.use("/login", loginRouter);

app.use("/", (req, res) => {
  res.json({ _health: "ok" });
});

//listen
app.listen(port, function () {
  console.log(`Your port is on port ${process.env.PORT}`);
});
