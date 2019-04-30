const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})

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

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Crud Server</h1>')
});

app.get('*', (req, res, next) => {
    res.redirect('/')
});

const port = (process.env.PORT || 5050);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
