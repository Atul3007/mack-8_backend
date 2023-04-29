const mongoose=require("mongoose");
const notesschema=mongoose.Schema({
        name: String,
        address: {
          street: String,
          city: String,
          state: String,
          country: String,
          zip: String
        },
        menu: [{
          _id: String,
          name: String,
          description: String,
          price: Number,
          image: String
        }]
      
})
const notesmodel=mongoose.model("note",notesschema);
module.exports={
    notesmodel
}

