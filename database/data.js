import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "newyork",
    })
    .then((c) => console.log(`Server is Working on port: ${process.env.PORT} in ${process.env.NODE_ENV})Mode`))
    .catch((e) => console.log(e));
};
