# RESTful CRUD Node-Server

# Marchal's Watch Store
A marketplace where users can buy watches

# Server Process
I used postman to fill my server with data.

# Deployment 
Deployed to Heroku. To view deployment link:

https://shielded-ravine-64228.herokuapp.com/

# Data Structure
name: product name
price: product price
color: product color
size: product size

#### Routes ####

# Get All Products
- "product/" - Get all products in the database

# Get Product by Name
- "product/name/:name" - Get a product by specific name

# Get Product by Price
- "product/price/:price"

# Create New Product
- "product/create" - Add a new product
- To add a new product in Postman use the following format:
name: product name,
price: product price,
color: product color,
size: product size

# Update Product by id
- "/:id/update" - Update a specific product

# Delete Product by id
- "/:id/delete" - Delete a specific product