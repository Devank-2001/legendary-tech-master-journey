import { productModel } from "../models/product.model.js";
import { sendToIk } from "../services/storage.service.js";

export const createProductController = async (req, res) => {
  try {
    if (!req.file)
      return res.status(404).json({
        message: "Images are required",
      });

    let { producName, description, amount, currency } = req.body;

    if (!producName || !description || !amount)
      return res.status(400).json({
        message: "All fields are required",
      });

    let imageArr = await Promise.all(
      req.file.map(async (e) => await sendToIk(e.buffer, e.originalname)),
    );

    console.log(imageArr);
    
    let product = await productModel({
        producName,
        description,
        price:{
            amount,
            currency
        },
        image:imageArr.map((e)=>e.url)
    }
    )
    return res.status(200).json({
        success:true,
        product,
        message:"product created succesfully"
    })

  } catch (error) {
    console.log("EError",error);
    
    return res.status(500).json({
        message:"internal server error",
        success:false
    })
  }
};
