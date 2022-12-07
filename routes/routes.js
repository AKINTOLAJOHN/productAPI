const express = require('express');
const router = express.Router()
const productController = require('../controllers/product.controller')

router.post('/post',productController.itemUpload)
router.get('/get',productController.getAll)
router.get('/getOne/:id',productController.getOne)
router.patch('/update/:id',productController.update)
router.delete('/delete/:id',productController.removeItem)

module.exports = router