const handleHome = (req, res) => {
    const data = [
        {
            id: 1,
            name: 'toyota avanza',
            year: 2024
        },
        {
            id: 2,
            name: 'merci',
            year: 2023
        },
        {
            id: 3,
            name: 'bmw',
            year: 2022
        }
    ]
    res.render('index', {data});
}

const handleListCars = (req, res) => {
    console.log('req.query', req.query);
    const name = req.query.name || '';

    if(name){
        res.send(`This will return list of cars with name: ${name}`);
        return;
    }

    res.send("This will return list of cars!!");
}

const handleGetDetailCar = (req, res) => {
    res.send(`This will return detail of car with id ${req.params.id}`);
}

const handelCreateNewCar = (req, res) => {
    console.log('req.body', req.body);

    res.send(`Successfully created new car!`);
}

module.exports = {
    handleHome,
    handleListCars,
    handleGetDetailCar,
    handelCreateNewCar
}