// const shoes = [
//     {
//         id: '1',
//         brand: 'Vans',
//         type: 'Street',
//         price: 99,
//     },
//     {
//         id: '2',
//         brand: 'New Balance',
//         type: 'Streetrunning',
//         price: 99,
//     },
//     {
//         id: '3',
//         brand: 'Hoka One One',
//         type: 'Trailrunning',
//         price: 99,
//     }
// ]

const express = require('express');
const app = express();
const fs = require('fs');
const uniqId = require('uniqid');
const ejs = require('ejs');

let jsonData = fs.readFileSync('data.json');
let shoes = JSON.parse(jsonData);

const port = process.env.PORT || 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.redirect('/shoes')
})

app.get('/shoes', (req, res) => {
    res.render('index', {shoes: shoes});
})

app.get('/shoes/:id', (req, res) => {
    const shoe = shoes.find(shoe => shoe.id == req.params.id);
    if(!shoe) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        res.render('details', {shoe: shoe});
    }
})

app.post('/shoes', (req, res) => {
    const newShoe  = {
        id: uniqId(),
        brand: req.body.brand,
        type: req.body.type,
        price: req.body.price,
    } 
    shoes.push(newShoe);
    res.send(newShoe);
})

app.put('/shoes/:id', (req, res) => {
    const prod = shoes.find(shoe => shoe.id === req.params.id);
    if(!prod) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        prod.brand = req.body.brand;
        prod.type = req.body.type;
        prod.price = req.body.price;
        res.send(prod);
    }
})

app.delete('/shoes/:id', (req, res) => {
    const prod = shoes.find(shoe => shoe.id === req.params.id);
    if(!prod) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        const index = shoes.indexOf(prod);
        shoes.splice(index, 1);
        res.send(prod);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})