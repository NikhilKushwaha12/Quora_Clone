const mongoose = require("mongoose");
const url =
"mongodb+srv://Nikhil_Kushwaha:howareyou123N@lmongodb.iggpbyp.mongodb.net/quora-clone?retryWrites=true&w=majority";


module.exports.connect = () => {
  mongoose
    .connect(url, {
      // useCreateIndex: true,
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error: ", error));
};


// const mongoose = require("mongoose");

// const url =
//   "mongodb+srv://Nikhil_Kushwaha:howareyou123N@lmongodb.iggpbyp.mongodb.net/quora-clone?retryWrites=true&w=majority";

// module.exports.connect = () => {
//   mongoose
//     .connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("MongoDB connected successfully");
//     })
//     .catch((error) => console.log("Error: ", error));
// };