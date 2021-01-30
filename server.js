//require express and set express() to a variable
const express = require('express');
const app = express();
//set variable of port to 3000
const port = process.env.PORT || 3000;

//set to retrieve pokemon data from pokemon.js and assign to variable called pokemon
const pokemon = require('./models/pokemon');

//include a get route / that will res.send('Welcome to the Pokemon App!'); so that when you got to localhost:3000, you will see Welcome to the Pokemon App!
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Create a get route /pokemon that will res.send(pokemon), which will display your pokemon data as json in the browser
app.get('/pokemon', (req, res) => {
    // res.send(pokemon);
    // change /pokemon route to res.render index.ejs file
    res.render('index.ejs', {
        pokemons: pokemon
    });
})

//show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]});

})

//set app to listen to te port and include console.log()
app.listen(port, () => {
    console.log(`We are connected/live at port: ${port}`);
}); 