const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/animalsDB", { useNewUrlParser: true,useUnifiedTopology: true })

const animalSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please enter name!"]
  },
  color:String,
  type:String,
  age:{
    type:Number,
    min:0,
    max:10
  }
});

const Animal = mongoose.model("Animal", animalSchema);

const karabas = new Animal ({
  name: "Karabas",
  color:"Black",
  type:"Dog",
  age:2
});

const tarcin = new Animal ({
  name: "Tarcin",
  color:"Yellow",
  type:"Dog",
  age:3
});

const tekir = new Animal ({
  name: "Tekir",
  color:"Yellow",
  type:"Cat",
  age:1
});

const duman = new Animal ({
  name: "Duman",
  color:"Grey",
  type:"Parrot",
  age:5
});

Animal.insertMany([karabas,tekir,tarcin,duman], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Succesfully saved all the animals to animalsDB!")
  }
})

// Find documents
Animal.find(function(err,animals){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();

    animals.forEach(function(animals){
      console.log(animals.name,'-',animals.type)
    })
  }
})


// Update documents (karabas)
Animal.updateOne({_id:"5d9f4bb66ddfed508c479184"},{age:3},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Succesfully updated the document.")
  }
})

// Update documents (tekir)
Animal.updateOne({_id:"5d9f4bb66ddfed508c479186"},{name:"Minnos"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Succesfully updated the document.")
  }
})

// delete documents
Animal.deleteOne({name:"Tarcin"},function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Succesfully deleted the document.")
  }
})

// many delete
Animal.deleteMany({name:"Duman"},function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Succesfully deleted all 'Duman'");
  }
}) 


const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please enter name!"]
  },
  color:String,
  type:String,
  age:{
    type:Number,
    min:0,
    max:10
  }
});

const Person = mongoose.model("person", personSchema);