import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import { cartModel } from "../models/cart.model.js";

export const registerController = async (req, res) => {
  try {
    let { name, email, mobile, password } = req.body;

    if (!name || !email || !password || !mobile)
      return res.status(400).json({
        message: "all fields are require",
      });

    let isExisted = await userModel.findOne({ email });

    if (isExisted) {
      return res.status(400).json({
        message: "User already exist.",
      });
    }

    let haspass = await bcrypt.hash(password, 10);

    let newUser = await userModel.create({
      name,
      email,
      mobile,
      password: haspass,
    });

    let userCart = await cartModel.create({
      user_id: newUser._id,
    });
    newUser.cart = userCart._id;

    await newUser.save();

    let token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    return res.status(201).json({
      success: true,
      message: "user registered",
      user: newUser,
    });
  } catch (error) {
    console.log("error in reg", error);
    return res.status(500).json({
      success: false,
      message: "register error server error",
    });
  }
};

export const loginController = async (req, res) => {
  try {
    let { email, name, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let existedUser = await userModel.findOne({ email });

    if (!existedUser) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    let checkpass = await bcrypt.compare(password, existedUser.password);

    if (!checkpass) {
      res.status(401).json({
        message: "email or password not match",
      });
    }

    let token = jwt.sign({ id: existedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

    return res.status(200).json({
      success: true,
      message: "user logged in",
      user: existedUser,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "login error",
    });
  }
};

export const logoutController = async (req, res) => {
  try {
    let { user_id } = req.body;

    if (!user_id)
      return res.status(404).json({
        message: "user not found",
      });

  
    let token = req.cookies.token;
    if (!token)
      return res.status(404).json({
        message: "token not found",
      });

    res.clearCookie("token");

    return res.status(200).json({
      message: " user logout ",
      success: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "logout fail",
      success: false,
    });
  }
};
