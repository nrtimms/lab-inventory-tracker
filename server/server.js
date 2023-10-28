require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/authentication", require("./routes/auth"));
app.use("/chemicals", require("./routes/chem"));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});