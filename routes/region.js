var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:id', function(req, res) {
    db.getRegions(req.params.id)
    .then(region => {
    res.render('regions', {region: region})
    })
})

module.exports = router