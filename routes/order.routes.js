const express=require("express");
const order_router=express.Router();
const {ordersmodel}=require("../models/orders.model")


order_router.get("/:id",async(req,res)=>{
    const ID=req.params.id;
    let flight=await ordersmodel.findOne({_id:ID});
    try {
        res.send(flight);    
    } catch (error) {
        console.log(error);
        res.send("Unable to fetch data");
    }
    
})


order_router.post("/",async(req,res)=>{
    const payload=req.body;
    try {
        const newnote=new ordersmodel(payload);
        await newnote.save();
        res.send("order created")
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
})

order_router.patch("/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    try {
        let data=await ordersmodel.findByIdAndUpdate(({_id:id},payload));
            res.send(data);
    } catch (error) {
        //console.log(error);
        res.send(payload);
    }
            
    
})

module.exports={
    order_router
}