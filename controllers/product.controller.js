const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Welcome to  Marchals Store);
};

exports.all = (req, res) => {
    Product.find()
    .then( (allProducts) => res.send(allProducts));
}

exports.find_name = (req, res, next) => {
    const productName = req.params.name;
    Product.find({
        name: productName
    })
    .then(result => {
        res.send(result)
    })
};

exports.find_price = (req, res, next) => {
    const productPrice = req.params.price;
    Product.find({
        price: productPrice
    })
    .then(result => {
        res.send(result)
    })
};

exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            color: req.body.color,
            size: req.body.size,
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product created successfully!')
    })
};

exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Product deleted successfully!');
    })
};