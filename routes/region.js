var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('', function(req, res) {
    console.log('region id', req.params.id)
    db.getRegions(req.params.id)
    .then(region => {
    res.render('regions', {region: region})
    })
})

module.exports = router