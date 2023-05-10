import mongoose from "mongoose";

const collection = 'cars'

const CarsSchema = new mongoose.Schema({
    name: String,
    description: String,
    kilometers: Number,
    status: String,
    pics: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cars"
    }
})

const carModel = mongoose.model(collection, CarsSchema)

export default carModel