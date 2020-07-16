var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    productId: { type:Number},
    productName: { type:String},
    productCode: { type:String},
    releaseDate: { type:String},
    description: { type:String},
    price: { type:Number},
    starRating: { type:Number},
    imageUrl: { type:String}
});
module.exports = mongoose.model('Product',productSchema);//changed p-P