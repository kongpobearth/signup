import express,{Request, Response} from "express";
import mongoose from "mongoose";
export const member = express.Router ();


member.post("/signupAccount", (req: Request, res: Response) => {
    mongoose.connect('mongodb://admin:1234@localhost:27017/AccDB?authSource=AccDB')
    const {username, password, firstname, lastname, NationalID, Email, PhoneNum} = req.body;
    console.log("received data",
        {username, 
        password, 
        firstname, 
        lastname, 
        NationalID, 
        Email, 
        PhoneNum});
    const accountSchemas = new mongoose.Schema({
        username: {type : String , required : true}, 
        password : {type : String , required : true}, 
        firstname : {type : String , required : true}, 
        lastname : {type : String , required : true}, 
        NationalID : {type : String , required : true}, 
        Email :{type : String , required : true}, 
        PhoneNum : {type : String , required : true}
    })
    const Accounts = mongoose.model('accounts', accountSchemas);
    const dbResponse = Accounts.create({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        NationalID : req.body.NationalID,  
        Email : req.body.Email,
        PhoneNum : req.body.PhoneNum
    });
        res.status(200).json({Message : "success",data : req.body});
   
    });

export default member;