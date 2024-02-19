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
});

export type User = InferSchemaType<typeof UserSchema>;
export default mongoose.model("User", UserSchema);