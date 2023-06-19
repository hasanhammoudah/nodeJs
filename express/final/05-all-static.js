const express = require('express');
const path = require('path')
const app = express()


// setup static and middleware
app.use(express.static('./public/'))

//app.get('/', (req, res) => {
// res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding to static asstes
// SSR
//})

app.get('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(500, () => {
  console.log('server is listening on port 500')
})
