const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const bodyParser=require("body-parser")
const mongoose=require("mongoose");


const app=express()

dotenv.config()


app.use(cors())
app.use(bodyParser.json())

const { Schema } = mongoose;

const userSchema = Schema({

    imageUrl: { type: String,},
    title: { type: String},
    description: { type: String}

});

const Users = mongoose.model("users", userSchema)




app.get("/" , (req , res)=> { 
    res.send("Emin ahhh")
})



app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
         else {
            res.status(404).json({ message: err })
        }
    })
})




app.get("/users/:id", (req, res) => {

    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)
            }

        } else {
            res.status(404).json({ message: err })
        }
    })

})



app.delete("/users/:id", (req, res) => {

    const { id } = req.params

    Users.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send("Succesfully deleted")
        }
        else {
            res.status(404).json({ message: err })
        }
    })

});




app.post("/users", (req, res) => {
const obj = {

    imageUrl: req.body.imageUrl,
    title: req.body.title,
    description: req.body.description

}
console.log(obj);
    let user = new Users(obj)
    user.save();

    res.send({ message: " Succesfully added" })

})



const PORT=process.env.PORT

const url=process.env.URL.replace("<password>",process.env.PASSWORD)
mongoose.set('strictQuery', true);

mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connected");
        app.listen(PORT,()=>{
            console.log("Server start");
        })
    }
})

