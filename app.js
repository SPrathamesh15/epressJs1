const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// this will always at the top of code
app.use(bodyParser.urlencoded({extended:false}))
//creating a middleware
app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="Input Size"><button type="submit">Add Product</button></form>')
    res.send('<h1>This is Add Product Page</h1>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
}) 

//this below middleware should always below above all the middlewares if it comes before any middleware then it will also get execute even if we haven't call this page
app.use('/',(req, res, next) => {
    res.send('<h1>Hello from ExpressJs!</h1>')//it will send a response to the server and it also sets a header to content-type: text.html
})

// const server = http.createServer(app)
// server.listen(5000)
app.listen(5000)// this line will do the work of both above lines
