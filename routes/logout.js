const router = require("./index");

router.get('/logout', (req, res, next) => {
    console.log('Request for logout received');
    login = false;
    res.render('../views/pages/index', {title: 'Express', login: login, errorMessage: ""});
});
module.exports = router;
