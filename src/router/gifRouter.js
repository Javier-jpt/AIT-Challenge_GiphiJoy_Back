const express = require('express')
const controller = require('../controllers/gifController')
const api = express.Router()

api
  .post('/gif', controller.postGif)
  .get('/gif', controller.getGifs)
  .get('/gif/:gifgenre', controller.getGifsByGenre)
  .delete('/gif/:gifId', controller.deleteGif)
  .get('/gif/:gifId', controller.getGifsById)


module.exports = api;