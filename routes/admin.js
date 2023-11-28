const express = require('express');

const router = express.Router();

//creating a middleware
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><input type="number" name="Input Size"></input><button type="submit">Add Product</button></form>')
    res.send('<h1>This is Add Product Page</h1>')
})

router.post('/add-product', (req, res, next) => {
    const product = req.body.title
    res.send(`<h1>${product} is added!!!`)
    console.log(req.body)
    res.redirect('/')
}) 

module.exports = router;