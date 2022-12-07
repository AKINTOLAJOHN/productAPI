const productModel = require('../models/product.model')
//  cloudinary
const cloudinary = require('cloudinary')
require('dotenv').config()
cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_APIKEY,
    api_secret : process.env.CLOUD_APISECRET
})



// to upload to the datatbase
const itemUpload =   (req,res)=>{
    `## To  post item to the database route to [https://localhost:3000/app/post] is  by making a POST request to this route [https://localhost:3000/app/post].. when item is been seen to this route it should be send in from of json  like this 
    data = {
        imgLink : {image} , ## image of the product
        name: {name}, ## name of the product
        price : {price}, ## price of the item
        stock: {quantity}, ## quantity of the product     
    }
    ## This endpoint can be edited  'routes/routes.js'.`

    let data = req.body.data.imgLink

    cloudinary.v2.uploader.upload(data,(error,result)=>{
        if (error){
            res.status(400).json({message: error.message})
        }else{
            let data = {
                imgLink : result.secure_url,
                name:  req.body.data.name, 
                price : req.body.data.price,
                stock: req.body.data.stock,
                isPublished : true
            }
            try{
                let dataToSave = new productModel(data);
                dataToSave.save((error)=>{
                    if(error){
                        res.status(400).json({message: error.message})
                    }else{
                        res.status(200).json(dataToSave)
                    }
                } 
                )
            }
            catch(error){
                res.status(400).json({message: error.message})
            }
        }
    })

}

// to get all item from the database 
const getAll = async (req,res)=>{
    `## To  get all item from the database route to [https://localhost:3000/app/get] by making a GET requests to this routes [https://localhost:3000/app/get] ]
    This endpoint can be edited  'routes/routes.js'.`
    try{
        const data = await productModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

//Get by ID Method
const getOne = async (req, res) => {
    ` To  get one item from the database route to [https://localhost:3000/app/getOne/:id] is by making a GET request to this route [https://localhost:3000/app/getOne/{id of the item} eg. 127.0.0.1:3000/api/getOne/638c9fc635c0a14955f6e67d ]
 This endpoint can be edited  'routes/routes.js'.`
    try{
        const data = await productModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }

 }
    


//Update by ID Method
const update =  async (req, res) => {
    ` To  update one item from the database route to [https://localhost:3000/app/update/:id] is by making a PATCH request to this route [https://localhost:3000/app/update/{id of the item} eg. 127.0.0.1:3000/api/update/638c9fc635c0a14955f6e67d ]
     This endpoint can be edited  'routes/routes.js'.`
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await productModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(422).json({ message: error.message })
    }

}

//Delete by ID Method
const removeItem = async (req, res) => {
    ` To  delete one item from the database route to [https://localhost:3000/app/delete/:id] is by making a DELETE request to this route [https://localhost:3000/app/delete/{id of the item} eg. 127.0.0.1:3000/api/delete/638c9fc635c0a14955f6e67d ]
    This endpoint can be edited  routes/routes.js'.`
    try {
        const id = req.params.id;
        const data = await productModel.findByIdAndDelete(id)
        res.status(201).send(`Document  has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}






module.exports = {itemUpload, getAll, getOne, update, removeItem}