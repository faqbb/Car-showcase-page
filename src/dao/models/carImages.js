import mongoose from "mongoose"

const collection = 'carImages'

const carImagesSchema = new mongoose.Schema({
    images : []
})

const carImagesModel = mongoose.model(collection, carImagesSchema)

export default carImagesModel