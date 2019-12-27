
const express = require('express')
const app = express()
app.use('/', express.static(__dirname + '/public'))

app.listen(3344, () => {
  console.log('Started on http://localhost:3344')
});
