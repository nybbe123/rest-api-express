const shoes = [
    {
        id: '1',
        brand: 'Vans',
        price: 99,
    },
    {
        id: '2',
        brand: 'New Balance',
        price: 99,
    },
    {
        id: '3',
        brand: 'Hoka One One',
        price: 99,
    }
]

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.get('/shoes', (req, res) => {
    res.send(shoes);
})

app.get('/shoes/:id', (req, res) => {
    const prod = shoes.find(shoe => shoe.id === req.params.id);
    if(!prod) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        res.send(prod);
    }
})

app.post('/shoes', (req, res) => {
    const newShoe  = {
        id: shoes.length + 1,
        name: req.body.name,
        price: req.body.price,
    } 
    shoes.push(newShoe);
    res.send(newShoe);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})