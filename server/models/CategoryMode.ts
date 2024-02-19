import mongoose, { InferSchemaType } from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export type Category = InferSchemaType<typeof CategorySchema>;
export default mongoose.model("Category", CategorySchema);