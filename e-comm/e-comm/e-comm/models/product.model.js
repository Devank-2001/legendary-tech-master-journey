import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    price: {
      amount: {
        type: String,
        require: true,
      },
      currency: {
        type: String,
        enum: ["INR", "$"],
        default: "INR",
      },
    },
    image:[ {
      type: String,
      maxlength: 5,
    }],

    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true },
);


export const productModel = mongoose.model("products",productSchema)
