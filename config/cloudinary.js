const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: "", //check your cloudinary account
    api_key: "", 
    api_secret: "", 
    secure: true
});

module.exports = cloudinary