const express = require("express");
const { connection } = require("./config/db");
const {user_router}=require("./routes/user.routes");
const {order_router}=require("./routes/order.routes");
const {note_router}=require("./routes/restaurant.routes");
const {authhenticate}=require("./middleware/authenticate.middleware");
const cors=require("cors");
const app = express();
app.use(express.json());
app.get("/api", (req, res) => {
    res.send("Welcome");
})
app.use(cors({
    origin: '*'
}));

app.use("/api",user_router); 
app.use(authhenticate);
app.use("/api/restaurants",note_router);
app.use("/api/orders",order_router);
app.listen(4500, async () => {
    try {
        await connection;
        console.log("Connected to Db");
    } catch (error) {
        console.log(error);
        console.log("Problem in db");
    }
    console.log("4500 running");
})


// {
//    "name":"Abc",
//    "email":"abc@gmail.com",
//    "pass":"1234",
//    "address": {
//              "street": "mg road",
//              "city": "Prayagraj",
//              "state": "UP",
//              "country": "India",
//              "zip": "211006"
// }

// {
//     "name": "abc",
//             "address": {
//                "street": "mg road",
//                "city": "Prayagraj",
//                "state": "UP",
//                "country": "India",
//                "zip": "211006"
//  } ,
//          "menu": [{
//            "_id": "1",
//            "name": "Mughalai",
//            "description": "abc",
//            "price": 200,
//            "image": "String"
//          }]
//  }


// "email": "babu@gmail.com",
// "pass": "123"