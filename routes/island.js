var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('', function(req, res) {
    db.getIslands(req.params.id)
    .then(island => {
    res.render('islands', {island: island})
    })
})

module.exports = router