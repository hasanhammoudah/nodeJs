const express = require('express');
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

///app.use([logger,authorize])
// req => minddleware => res

// 1.use vs route
// 2.options - our own / express / third party

/*

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

*/

app.use(express.static('./public'))
app.use(morgan('tiny'))
app.get('/', (req, res) => {

  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  // console.log(req.user)
  res.send('Items')
})


app.listen(500, () => {
  console.log('server is listening on port 500')
})
