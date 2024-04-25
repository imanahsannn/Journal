import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    createdDate: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 