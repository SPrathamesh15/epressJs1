const express = require('express')

const router = express.Router();

//this below middleware should always below above all the middlewares if it comes before any middleware then it will also get execute even if we haven't call this page
router.get('/shop/',(req, res, next) => {
    res.send('<h1>Hello from ExpressJs!</h1>')//it will send a response to the server and it also sets a header to content-type: text.html
})

module.exports = router;