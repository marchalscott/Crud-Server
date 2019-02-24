const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/test', product_controller.test);

router.get('/', product_controller.all);
router.get('/name/:name', product_controller.find_name);
router.get('/price/:price', product_controller.find_price);

router.post('/create', product_controller.product_create);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;