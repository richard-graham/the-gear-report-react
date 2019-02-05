var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:id', function(req, res) {
    db.getWalls(req.params.id)
    .then(wall => {
    res.render('wall', {wall: wall})
    })
})

module.exports = router