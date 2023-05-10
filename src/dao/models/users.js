import mongoose from "mongoose";

const collection = 'users'

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
})

const userModel = mongoose.model(collection, userSchema)

export default userModel