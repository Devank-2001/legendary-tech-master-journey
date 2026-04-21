import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    mobile: {
      type: String,
      minlength: 10,
      maxlength: 10,
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "cart" },
  },
  { timestamps: true },
);

export const userModel = mongoose.model("users", userSchema);
