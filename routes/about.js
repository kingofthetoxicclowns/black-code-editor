const router = require("./index");
const express = require('express');
const {Accounts} = require("../model/Accounts");
router.get('/about', (req, res) => {
    console.log('Request for about page received');
    let account = Accounts.all(rows => {
        res.render('../views/pages/about', {accounts: rows, login: login});
    });
});
module.exports = router;
