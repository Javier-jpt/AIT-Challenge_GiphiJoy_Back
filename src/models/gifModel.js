const { Schema, model } = require('mongoose')

const GifSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: String,
  genre: String
})

const GifModel = model('Gif', GifSchema)

module.exports = GifModel