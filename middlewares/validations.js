const middleware1 = (req, res, next) => {
    console.log('run mid 1');
    const id = req.params.id;

    if(id !== '2'){
        res.send(`id not found`);
        return;
    }

    next();
}

const middleware2 = (req, res, next) => {
    console.log('run mid 2');
    next()
}

module.exports = {
    middleware1,
    middleware2
}