var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('', function(req, res) {
    console.log('area id', req.params.id)
    db.getAreas()
    .then(area => {
    // res.render('area', {area: area})
    res.render('areas', {area: area})
    console.log(area);
    })
})

module.exports = router