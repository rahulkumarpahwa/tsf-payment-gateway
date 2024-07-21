const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server has been Started.", status: 200, success: true });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at Port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});
