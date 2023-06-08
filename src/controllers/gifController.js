const Gif = require('../models/gifModel')

async function postGif(req, res) {
	const { name, imageUrl, genre } = req.body
	const newGif = new Gif({ name, imageUrl, genre })
	try {
		const gifSaved = await newGif.save()
		if (!gifSaved) {
			return res.status(400).send({ status: 400, msg:"Not posible to create a Gif"})
		}
    return res.status(200).send({ status: 200, msg:"Gif Created", gif:gifSaved})
	} catch (err) {
		return res.status(500).send({ status: 500, msg:"Server Error", error: err})
	}
}



async function getGifs(req, res) {
	try {
		const gifsStored = await Gif.find().lean().exec()
		if (!gifsStored) {
			return res.status(400).send({ status: 400, msg:"Not posible find a Gif"})
		}
    return res.status(200).send({ status: 200, msg:"Gifs find", gifs:gifsStored})
	} catch (err) {
		return res.status(500).send({ status: 500, msg:"Server Error", error: err})
	}
}

async function getGifsByGenre(req, res) {
	const { gifgenre } = req.params
  try {
		const gifsStored = await Gif.find({ genre:gifgenre }).lean().exec()
		if (!gifsStored) {
			return res.status(400).send({ status: 400, msg:"Not posible find a Gif"})
		}
    return res.status(200).send({ status: 200, msg:"Gif find", gifs:gifsStored})
	} catch (err) {
		return res.status(500).send({ status: 500, msg:"Server Error", error: err})
	}
}

async function getGifsById(req, res) {
	const { gifid } = req.params
  try {
		const gifsStored = await Gif.find({ _id:gifid }).lean().exec()
		if (!gifsStored) {
			return res.status(400).send({ status: 400, msg:"Not posible find a Gif"})
		}
    return res.status(200).send({ status: 200, msg:"Gif find", gif:gifsStored})
	} catch (err) {
		return res.status(500).send({ status: 500, msg:"Server Error", error: err})
	}
}

async function deleteGif(req, res) {
  const { gifId } = req.params
  try {
		const gifDelete = await Gif.findOneAndDelete({ _id: gifId }).lean()
		if (!gifDelete) {
			return res.status(400).send({ status: 400, msg:"Not posible delete a Gif" })
		}
		return res.status(200).send({ status: 200, msg:"Gif deleted"})
	} catch (err) {
		return res.status(500).send({ status: 500, msg:"Server Error", error: err })
	}
}

module.exports = {
	postGif,
  getGifs,
  getGifsByGenre,
  deleteGif,
  getGifsById
}