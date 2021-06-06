require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);

app.use(express.json());

const subscribersRouter = require("./routes/subscribers.js");
app.use("/subscribers", subscribersRouter);

app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
