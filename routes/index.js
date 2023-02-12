const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    console.log("Request for index page received")
    res.render('../views/pages/index', {title: 'Express', login: login});
});
module.exports = router;
