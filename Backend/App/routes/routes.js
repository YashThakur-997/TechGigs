let express=require("express");
const { handellogin } = require("../controllers/login");
const { handelsignup } = require("../controllers/signup");

let routes = express.Router();

routes.post("/Login",handellogin);

routes.post("/signup",handelsignup);

module.exports=routes;