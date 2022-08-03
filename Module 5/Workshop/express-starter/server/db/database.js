import mongoose from "mongoose";

const mongoDB = "mongodb+srv://karsonbizzell:Rose22!@cluster0.vgv4w.mongodb.net/test";

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
