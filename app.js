const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');

const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://admin:TheMoriut10!!@cluster0-o74tg.mongodb.net/Product';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

const port = (process.env.PORT || 5050);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
