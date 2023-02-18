
const todoModel = require("../models/todoModel");
const app = require("express").Router();


app.get("/todo", async (req, res) => {
  try {
    const todoModels = await todoModel.find().sort({name: 1});
    res.send(todoModels);
  } catch (e) {
    res.status(400).send(e);
  }
});


app.get("/todo", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const todoModels = await todoModel.find().skip(startIndex).limit(limit).sort({name: 1});
    const total = await todoModel.countDocuments();
    const results = {};
    if (endIndex < total) {
      results.next = {
        page: page + 1,
        limit
      };
    }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit
      };
    }
    results.results = todoModels;
    res.send(results);
  } catch (e) {
    res.status(400).send(e);
  }
});





app.get("/todo/:name", async (req, res) => {
  let name=(req.params.name);
  try {
 const todoitemModels = await todoModel.find({
      name: { $regex: name, $options: "i" },
    }).sort({name: 1});
    res.send(todoitemModels)
    console.log(todoitemModels)
  } catch (e) {
    res.status(400).send(e);
  
  }
});


app.delete("/:id", async(req,res)=>{
  let _id= req.params.id;
  console.log(_id)
  try {
    const delModels = await todoModel.findByIdAndDelete({_id});
    res.send(delModels);
  } catch (e) {
    res.status(400).send(e);
  }
})


app.patch("/:id", async (req, res) => {
  const { name, email, address, city, gender, mobile } = req.body;
  const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id, {
    name,
    email,
    address,
    city,
    gender,
    mobile,
  }, { new: true });
  res.send({ message: updatedTodo });
  console.log(updatedTodo); 
});

app.post("/", async (req, res) => {
  const { name, email, address, city, gender, mobile } = req.body;
  const data = await todoModel.create({
    name,
    email,
    address,
    city,
    gender,
    mobile,
  });
  //console.log(data)
  res.send({ message: "data added" });
});



module.exports = app;
