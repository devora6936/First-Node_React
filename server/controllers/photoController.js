const Photo = require("../models/Photos")

const createPhoto = async (req, res) => {
    const { title, imgUrl } = req.body
    if (!imgUrl)
        return res.status(400).send(`imgUrl is required`)
    const photo = await Photo.create({ title, imgUrl })
    res.json(photo)
}

const GetAllPhoto = async (req, res) => {
    const photos = await Photo.find().lean()
    // if (!photos[0])
    //     return res.status(400).send(`there are no photo`)
    res.json(photos)
}

const getPhotoById = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findById(id).lean()
    if (!photo)
        return res.staus(400).send(`there is no photo with id ${id}`)
    res.json(url)
}

const updatePhoto = async (req, res) => {
    const { _id, title, imgUrl } = req.body
    if (!_id || !imgUrl)
        return res.status(400).send(`missing required fieldes`)
    const photo = await Photo.findById(_id).exec()
    if (!photo)
        return res.staus(400).send(`there is no photo with id ${id}`)
    photo.title = title
    photo.imgUrl = imgUrl

    await photo.save()
    res.send(`photo ${photo.title} updated`)
}

const deletePhoto = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findById(id).exec()
    if (!photo)
        return res.staus(400).send(`there is no photo with id ${id}`)
    await photo.deleteOne()
    res.send(`photo ${photo.title} deleted`)
}

module.exports = { deletePhoto, updatePhoto, getPhotoById, createPhoto, GetAllPhoto }