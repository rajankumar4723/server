import { User } from "../models/user.js";

export const RegisterUser = async (req, res, next) => {
  // Add `next` parameter here
  try {
    const { name, email, message } = req.body;

    await User.create({ name, email, message });

    res.status(200).json({
      success: true,
      message:"Message Submited"
    });

  } catch (error) {
    next(error);
  }
};
