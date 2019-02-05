var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:id', function(req, res) {
    db.getAreas(req.params.id)
    .then(area => {
    // res.render('area', {area: area})
    res.json(area)
    console.log(area);
    })
})

module.exports = router