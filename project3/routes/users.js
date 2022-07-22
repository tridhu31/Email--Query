var mongoose = require("mongoose")
mongoose.connect("mongodb+srv://tridhu31:jmRxy2L4IxHywEU1@cluster0.nhs5wrx.mongodb.net/?retryWrites=true&w=majority")
var schema = mongoose.Schema({
  Email:{
    type:String
  },
  Query:{
    type:String
  }
})
module.exports = mongoose.model("Query app",schema)