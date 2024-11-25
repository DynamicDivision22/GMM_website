const express = require('express');
const auth = require('../../../middleware/auth');
const controller = require('../../../controllers/productController');
const validator = require('../../../config/validators/productValidator');
const multer = require('multer');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');

const combinedUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname.includes('images')) {
        cb(null, 'views/static/images/product_images');
      } else if (file.fieldname.includes('models')) {
        cb(null, 'views/static/images/product_models');
      }
    },
    filename: (req, file, cb) => {
      cb(null, `${crypto.randomUUID()}${path.extname(file.originalname)}`);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.fieldname.includes('images') && file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else if (file.fieldname.includes('models') && file.mimetype.includes('octet-stream')) {
      cb(null, true);
    } else {
      req.isBadFiletype = true;
      cb(null, false);
    }
  }
}).fields([
  { name: 'create-product-images', maxCount: 10 },
  { name: 'create-product-models', maxCount: 10 },
  { name: 'update-product-images', maxCount: 10 },
  { name: 'update-product-models', maxCount: 10 }
]);

router.use((err, req, res, next) => {
  if (err) {
    return res.status(422).json({
      success: false,
      error: 'Invalid file type'
    });
  }
  next();
});

/*************************************************************************************************/
/* Post routes
/*************************************************************************************************/
router.post('/create', auth.authenticatedAPI, combinedUpload, validator.createProduct, controller.createProduct);

/*************************************************************************************************/
/* Put routes
/*************************************************************************************************/
router.put('/update', auth.authenticatedAPI, combinedUpload, validator.updateProduct, controller.updateProduct);

/*************************************************************************************************/
/* Delete routes
/*************************************************************************************************/
router.delete('/image/delete', auth.authenticatedAPI, validator.deleteProductImage, controller.deleteProductImage);
router.delete('/model/delete', auth.authenticatedAPI, validator.deleteProductModel, controller.deleteProductModel);

module.exports = router;