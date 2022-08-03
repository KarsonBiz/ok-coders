import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    age: Number,
    bio: String,
    website: String,
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;