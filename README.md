How to to create http server using express
1. Make sure already installed Node.Js
2. Initialize node project, by running command: `npm init`. It will generate the package.json file
3. Install express, by running command: `npm install express`.
4. Create http server
    - Create file `index.js`
    - In `index.js` file, create http server using express
    - Don't forget to import `express`
    - Determine the port number
    - Add request handler
    - Add server listener
5. To run it, run command `node index.js`

===== end =====

Request Parameter
1. Query Parameter
    - can get from req.query
    - example url: `xyz.com/cars?title=test`
    - param value can get from: `req.query.title`

2. Path Parameter
    - can get from req.params
    - have to define the params in the url, example: `/cars/:id`
    - example url: `xyz.com/cars/1`
    - param value can get from: `req.params.id`

View Engine -> EJS
1. Install EJS, by runnning command `npm install ejs`
2. Set view engine using ejs in `index.js` file, 
    `app.set('view engine', 'ejs');`
3. Create folder views
4. Inside folder views, create some ejs file
5. In request handler, render the ejs template

File handling using multer
1. Install multer, `npm install multer`
2. Create new file for multer middleware
3. Save in diskStorage
    - Create the storage, define the destination and the filename
    - Create the uploader with its storage
    - Add middleware uploader into routing and define the upload method, whether single, array or fields and define the fieldName `uploader.singe(fieldName)`
    - Don't forget to add middleware for static `app.use(express.static(directory))`

  Save in memoryStorage, so we can upload it into CDN (cloudinary)
    - Install cloudinary `npm install cloudinary`
    - Go to cloudinary account, and check the config
    - Create config file for cloudinary `clound_name, api_key, api_secret`, copy from cloudinary account
    - Add uploader to memoryStorage with multer
    - In request handler, add method upload to cludinary `cloudinary.uploader.upload()`
    - Before that, convert image file into base64 and set into dat URI
    - upload data URI to the cloudinary
    - if succesfully uploaded, get the image url from response of cloudinary



