const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary.js')

const { handleHome, handleListCars, handleGetDetailCar, handelCreateNewCar } = require('../handlers/handler.js');
const {middleware1, middleware2} = require('../middlewares/validations.js');
const {imageUpload, pdfUpload, mUpload} = require('../middlewares/multer.js')

router.get('/', handleHome);
router.get('/cars', handleListCars);
router.get('/cars/:id', middleware1, middleware2, handleGetDetailCar);
router.post('/cars', handelCreateNewCar);

router.post('/images/upload', imageUpload.single('image'), (req, res)=>{
    console.log(req.body);
    res.send('image succesfully uploaded');
});

router.post('/files/upload', pdfUpload.single('file'), (req, res)=>{
    console.log(req.body);
    res.send('file succesfully uploaded');
});

router.post('/cloudinary/upload', mUpload.single('file'), (req, res)=>{
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, {
        folder: 'fsw',
        use_filename: true
    },
     (err, result)=>{
        if(err){
           return res.status(400).json({
                message: 'failed to upload'
            })
        }

        res.status(200).json({
            message: 'success',
            data: {
                image_url: result.url
            }
        })
    })
});


module.exports = router;