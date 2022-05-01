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

app.get('/add', (req, res) => {
    res.render('add');
})

app.post('/add', (req, res) => {
    const newShoe  = {
        id: uniqId(),
        title: req.body.title,
        brand: req.body.brand,
        price: req.body.price,
        image: req.body.image
    } 
    shoes.push(newShoe);
    res.redirect('shoes');
})

app.get('/shoes/:id', (req, res) => {
    const shoe = shoes.find(shoe => shoe.id == req.params.id);
    if(!shoe) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        res.render('details', {shoe: shoe});
    }
})

app.get('/edit/:id', (req, res) => {
    const shoe = shoes.find(shoe => shoe.id == req.params.id);
    if(!shoe) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        res.render('edit', {shoe: shoe});
    }
})

app.put('/edit/:id', (req, res) => {
    const shoe = shoes.find(shoe => shoe.id == req.params.id);
    if(!shoe) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        shoe.title = req.body.title;
        shoe.brand = req.body.brand;
        shoe.price = req.body.price;
        shoe.image = req.body.image;
        res.redirect('shoes')
    }
})

app.delete('/delete/:id', (req, res) => {
    const shoe = shoes.find(shoe => shoe.id == req.params.id);
    if(!shoe) {
        res.status(404).send('The product with the given ID was not found');
    } else {
        const index = shoes.indexOf(shoe);
        shoes.splice(index, 1);
        res.redirect('shoes')
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})