let  express=require("express")
let  cors =require("cors")
let  bodyParser =require("body-parser")
let  mongoose =require("mongoose")
let routes = require("./App/routes/routes")
const app = express()
const port = 3000

app.use(cors())  // Enable CORS for all routes

mongoose.connect('mongodb://localhost:27017/TechGigs')  // Connect to MongoDB database named 'Techgigs'

const userSchema = new mongoose.Schema({  // Define the schema for the user
    username:String,
    password:String,
});

app.use(bodyParser.json())

app.use("/",routes)


app.listen(5000)
