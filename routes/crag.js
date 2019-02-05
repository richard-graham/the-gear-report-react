var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:id', function(req, res) {
    db.getCrags(req.params.id)
    .then(crag => {
    res.render('crag', {crag: crag})
    })
})

module.exports = router