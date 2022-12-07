## Getting Started

First, run the development server:

```bash
npm run dev
# or 
yarn dev

```


[API routes] can be accessed on [http://localhost:3000/api](http://localhost:3000/api/post).
This endpoint can be edited  `routes/routes.js'.

## To  get all item from the database route to [https://localhost:3000/app/get] by making a GET requests to this routes [https://localhost:3000/app/get] ]
This endpoint can be edited  `routes/routes.js'.

## To  post item to the database route to [https://localhost:3000/app/post] is  by making a POST request to this route [https://localhost:3000/app/post].. when item is been seen to this route it should be send in from of json  like this 
data = {
    imgLink : {image} , ## image of the product
    name: {name}, ## name of the product
    price : {price}, ## price of the item
    stock: {quantity}, ## quantity of the product     
}
## This endpoint can be edited  `routes/routes.js'.

## To  get one item from the database route to [https://localhost:3000/app/getOne/:id] is by making a GET request to this route [https://localhost:3000/app/getOne/{id of the item} eg. 127.0.0.1:3000/api/getOne/638c9fc635c0a14955f6e67d ]
## This endpoint can be edited  `routes/routes.js'.



## To  update one item from the database route to [https://localhost:3000/app/update/:id] is by making a PATCH request to this route [https://localhost:3000/app/update/{id of the item} eg. 127.0.0.1:3000/api/update/638c9fc635c0a14955f6e67d ]
## This endpoint can be edited  'routes/routes.js'.


## To  delete one item from the database route to [https://localhost:3000/app/delete/:id] is by making a DELETE request to this route [https://localhost:3000/app/delete/{id of the item} eg. 127.0.0.1:3000/api/delete/638c9fc635c0a14955f6e67d ]
## This endpoint can be edited  `routes/routes.js'.
