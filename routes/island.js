var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('', function(req, res) {
    db.getIslands(req.params.id)
    .then(island => {
    console.log('hi', island[0])
    res.render('islands', {island: island})
    })
})

module.exports = router