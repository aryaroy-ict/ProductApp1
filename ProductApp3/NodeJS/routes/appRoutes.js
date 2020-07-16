const express = require('express');
var router = express.Router();
var Product = require('../models/dataSchema');//linking the db data here

router.post('/create',(req,res , next)=>{
    var newProduct = new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        productCode: req.body.productCode,
        releaseDate: req.body.releaseDate,
        description: req.body.description,
        price: req.body.price,
        starRating: req.body.starRating,
        imageUrl: req.body.imageUrl
        
    });
    newProduct.save((err,product)=>{ //loading to the database if true.
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:product});

    });
    
});

router.get('/read',(req,res , next)=>{
    Product.find({},(err,productes)=>{
        if(err)
        res.status(500).json({errmsg:err});
    res.status(200).json({msg:productes});  
    });
    
});


router.put('/update',(req,res , next)=>{
    Product.findById(req.body._id,(err,product)=>{
        if(err)
        res.status(500).json({errmsg:err})
        product.productId= req.body.productId;
        product.productName= req.body.productName;
        product.productCode= req.body.productCode;
        product.releaseDate= req.body.releaseDate;
        product.description= req.body.description;
        product.price= req.body.price;
        product.starRating= req.body.starRating;
        product.imageUrl= req.body.imageUrl;
        product.save((err,product)=>{
            if(err)
             res.status(500).json({errmsg: err});

         res.status(200).json({msg: product}); 
        });
   // res.status(200).json({msg:product});  
    });
   // res.status(200).json({msg:'Update request working'});
});


router.delete('/delete/:id',(req,res , next)=>{
    Product.findOneAndRemove({_id:req.params.id},(err,product)=>{
        if(err)
            res.status(500).json({errmsg: err});

    res.status(200).json({msg: product});   
    });
   // res.status(200).json({msg:'delete request working'});
});

module.exports = router;