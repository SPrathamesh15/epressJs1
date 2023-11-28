const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//importing files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// this will always at the top of code
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found 404: Error!</h1>')
})
// const server = http.createServer(app)
// server.listen(5000)
app.listen(5000)// this line will do the work of both above lines
