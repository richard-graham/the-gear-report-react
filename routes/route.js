var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/:id', function(req, res) {
    db.getRoutes(req.params.id)
    .then(route => {
    res.render('route', {route: route})
    })
})

module.exports = router