import mongoose, { InferSchemaType } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
    }],
});

export type User = InferSchemaType<typeof UserSchema>;
export default mongoose.model("User", UserSchema);