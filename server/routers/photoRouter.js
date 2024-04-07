const photocontroller = require('../controllers/photoController')
const express = require('express')
const router = express.Router()

router.post('/', photocontroller.createPhoto)
router.get('/', photocontroller.GetAllPhoto)
router.get('/:id', photocontroller.getPhotoById)
router.put('/', photocontroller.updatePhoto)
router.delete('/:id', photocontroller.deletePhoto)

module.exports = router