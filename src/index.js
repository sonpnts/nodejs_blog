const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine((
 { extname: '.hbs'}
))); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
const port = 3000;

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/tin-tuc', (req, res) => {
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
