import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017/okcoders";

export async function connectToDatabase() {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error(e);
  }
}
