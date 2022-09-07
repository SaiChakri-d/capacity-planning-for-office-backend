const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

module.exports = {
  selectedDb: {},
  async connect() {
    try {
      console.log("Welcome:: " + process.env.MONGO_DRIVER);
      const client = await MongoClient.connect(process.env.MONGO_DRIVER);
      this.selectedDb = client.db("capacityplanning");
      console.log(this.selectedDb);
    } catch (e) {
      console.log(e);
    }
  },
};

// module.exports = {
//     selectedDb:{},
//     async connect(){
//         try{
//             console.log("Welcome");
//             //Connecting to the database
//             const db = mongoose
//             .connect("mongodb+srv://sai:chakri@cluster0.yfvmm.mongodb.net/test7/capacityplanning?retryWrites=true&w=majority")
//             .then(() => {
//                 app.listen(process.env.PORT, () => {
//                     console.log("DB connected");
//                 });
//             })
//             .catch((err) => {
//                 console.log("Error Occurred");
//             });
//             cons
//         }catch(e){
//             console.log(e);
//         }
//     }
// }
