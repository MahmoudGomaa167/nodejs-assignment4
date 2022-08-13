const express = require('express');

const router = express.Router();

const usersData = require('./users');

const users = []

router.get('/', (req, res, next) => {
    res.render('home', {path: '/', pageTitle: 'Add User'})
})

router.post('/users', (req, res, next) => {
    users.push({name: req.body.name})
    res.redirect('/users')
})

exports.routes = router;
exports.users = users;