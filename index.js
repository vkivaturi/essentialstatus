const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));

const dbqueries = require('./dbqueries.js');

const options = { timeZone: "Asia/Calcutta", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
const initialTime = "---";
const status_list = ["0", "1", "2", "3"];

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/categories', function (req, res) {

  dbqueries.allCategoriesQuery((err, rows) => {
    res.send(rows);
  });
})

app.get('/api/items', function (req, res) {

  dbqueries.allItemsQuery((err, rows) => {
    res.send(rows);
  });
})


app.get('/api/item/:item_code/update/status/:status', function (req, res) {
  //Json format variable
  var item = {};
  item.item_code = req.params.item_code;
  item.status = req.params.status;
  item.last_updated = new Date().toLocaleString("en-US", options);

  //Update status only if valid value is provided. 
  if (status_list.includes(item.status)) {
    dbqueries.updateItem(item, (err, rows) => {
      res.send(item);
    });
  } else {
    res.send(item);
  }
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file. This is how the main react application lods for frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Service listening on ${port}`);