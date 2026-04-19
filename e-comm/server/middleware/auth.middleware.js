import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken"
import { userModel } from "../models/user.model.js";


export const authMiddleware = async (req,res,next)=>{

   try {
     let token = req.cookies.token

    if(!token)
        return res.status(401).json({

             message: "Unauthorized token!",
    })


    let decode = jwt.verify(token,process.env.JWT_SECRET)

    if(!decode)
        return res.status(400).json({
      message: "Unauthorized user!",
        })

        let user = await userModel.findById(decode.id)
        req.user = user
        next()
        
    
   } catch (error) {
    
    console.log("error in md", error);
  return res.status(500).json({
    message: "Authentication failed",
  });
   }

}