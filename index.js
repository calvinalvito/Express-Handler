const express = require('express');
const app = express();

const carRoutes = require('./routes/cars')

const port = 3000;

app.set('view engine', 'ejs');
app.use('/', carRoutes);
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})