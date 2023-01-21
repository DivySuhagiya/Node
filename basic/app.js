const express = require("express");
const app = express();
const fs = require("fs");
const gender = require("./express/jsondata");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const productRouter = require("./routes/ProductRoutes");
const departmentRouter = require("./routes/DepartmentRoutes");
const employeeRouter = require("./routes/EmployeeRotes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
const songRoutes = require("./routes/SongRoutes");
const playlistRoutes = require("./routes/PlaylistRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/student", userRouter);
app.use("/product", productRouter);
app.use("/department", departmentRouter);
app.use("/employee", employeeRouter);
app.use("/cart", cartRoutes);
app.use("/upload", uploadRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

mongoose.connect(
  "mongodb://localhost:27017/Nodejs",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  },
  (err) => {
    if (err) {
      console.log("error in db connection", err);
    } else {
      console.log("db connected successfully");
    }
  }
);
