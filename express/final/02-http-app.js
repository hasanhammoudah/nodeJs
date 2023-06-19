//console.log(`Express`)
/*

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

*/
const http = require('http')
const { readFileSync } = require('fs')


// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  // console.log(req.url)
  const url = req.url;
  if (url == '/') {
    // res.writeHead(200, { 'content-type': 'text/plain' })
    res.writeHead(200, { 'content-type': 'text/html' })

    res.end(homePage)
    //console.log('user hit the server')
    res.end()
  }
  // about page
  else if
    (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<h1>about page</h1>')
    //console.log('user hit the server')
    res.end()
    //404
  }
  else if
    // styles
    (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.end(homeStyle)
    //console.log('user hit the server')
    res.end()

  }
  // image/Logo
  else if
    (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.end(homeImage)
    //console.log('user hit the server')
    res.end()

  }
  // Logic
  else if
    (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.end(homeLogic)
    //console.log('user hit the server')
    res.end()

  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.end('<h1>page not found</h1>')
    //console.log('user hit the server')
    res.end()
  }



})
server.listen(500)


