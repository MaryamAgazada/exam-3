const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
port=3000
app.use(express.json())
app.use(cors())
const kittySchema = new mongoose.Schema({
    image:String,
    name: String,
    price:Number
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
app.get('/product/',async function (req, res) {
    let elem=await Kitten.find()
  res.send(elem)
})
app.get('/product/:id',async function (req, res) {
    let elem=await Kitten.findById(req.params.id)
  res.send(elem)
})
app.delete('/product/:id',async function (req, res) {
    let elem=await Kitten.findByIdAndDelete(req.params.id)
  res.send(elem)
})
app.post('/product/',async function (req, res) {
    let elem=new Kitten(req.body)
   await elem.save()
  res.send(elem)
})
app.listen(3000,()=>{
    console.log(`connect ${port}`)
})
mongoose.connect('mongodb+srv://meryem:meryem@cluster0.uxlacr1.mongodb.net/')
  .then(() => console.log('Connected!'));