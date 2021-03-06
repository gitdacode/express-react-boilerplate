const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env` });

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((cons) => {
    console.log("Connected to mongoDB 🔌");
    app.listen(port, () => console.log(`Listening to port ${port}`));
  })
  .catch((err) => console.log(err));
