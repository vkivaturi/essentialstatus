const express = require('express');
const path = require('path');


const app = express();

const store_model = require('./db.js')

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));



app.get('/categories', function (req, res) {
    var categories = store_model.getCategories();
    res.send(categories);
})

app.get('/items', function (req, res) {
  
  var items = store_model.getItems();
    res.send(items);
})

app.get('/item/:item_code', function (req, res) {
    var item = store_model.fetchItem(req.params.item_code);
    res.send(item);
})

app.get('/item/:item_code/update/status/:status', function (req, res) {
    var item = [];
    item.item_code = req.params.item_code;
    item.status = req.params.status;

    item = store_model.updateItem(item);
    res.send(item);
})



// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Service listening on ${port}`);