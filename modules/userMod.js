const mongo = require("../shared");
const User = require("../model/users");

module.exports.setStudent = async (req, res, next) => {
  try {
    console.log(req.body);
    const timeString = new Date().getTime();
    console.log(timeString);
    req.body.created_at = timeString;
    const data = await mongo.selectedDb.collection("users").insertOne(req.body);
    console.log(data);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports.getUsers = async (req, res, next) => {
  console.log(mongo);
  try {
    res.send("Welcome");
    // User.find({},function(err,data){
    //     console.log(data)
    //     res.send(data)
    // });
    // const data = await User.find().toArray();
    // console.log(data)
    // res.send(data)
  } catch (e) {
    console.log(e);
  }
};
