const mongoose = require("mongoose");

const url =
  "mongodb+srv://blogapplication:YYTrw9z8fFZJWinc@cluster0.ywdlvcc.mongodb.net/?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
// KQ3JbvX6ZT6dXt6A
//uZLwfuBNDmfIUhsV