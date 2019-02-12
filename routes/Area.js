var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('', function(req, res) {
    db.getAreas()
    .then(area => {
    // res.render('area', {area: area})
    res.render('areas', {area: area})
    })
})

module.exports = router