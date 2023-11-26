const express = require('express');
const mongoose = require('mongoose');
const app = express();

const DB = 'mongodb+srv://abhipsha123:password@cluster0.buvcqxh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Connection successful`);
}).catch((err) => {
    console.error(`Connection error: ${err.message}`);
});


const middleware = (req, res, next) => {
    console.log('heelo middleware'); 
}
middleware();

app.get('/', (req, res) => {
    res.send(`Hello World`);
});

app.get('/about', (req, res) => {
    res.send(`Hello about`);
});
app.get('/contact', (req, res) => {
    res.send(`Hello contact`);
});
app.get('/signin', (req, res) => {
    res.send(`Hello signin`);
});
app.get('/signup', (req, res) => {
    res.send(`Hello signup`);
});


app.listen(5000, () => {
    console.log(`server is running `);
})