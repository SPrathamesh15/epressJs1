const express = require('express')
const app = express()

//creating a middleware
app.use((req, res, next) => {
    console.log('In the middleware!')
    next() // it allows us to look for another middleware if we don't use this it will only execute this middleware and if we use this then we can use other middleware as well
})

app.use((req, res, next) => {
    console.log('In the another middleware!')
    res.send('<h1>Hello from ExpressJs!</h1>')//it will send a response to the server and it also sets a header to content-type: text.html
})

// const server = http.createServer(app)
// server.listen(5000)
app.listen(5000)// this line will do the work of both above lines
