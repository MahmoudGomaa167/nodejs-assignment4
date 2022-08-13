const express = require('express');

const router = express.Router();

const usersData = require('./home')

router.get('/users', (req, res, next) => {
    const users = usersData.users;
    res.render('users', {users, path: '/users', pageTitle: 'Users'})
})

module.exports = router;