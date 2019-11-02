var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine', 'ejs');
//app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  
    res.render('do')
    
});

app.post('/do', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));