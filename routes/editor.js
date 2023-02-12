const router = require("./index");
router.get('/editor', (req, res, next) => {
    console.log('Request for editor page received');
    res.render('../views/pages/editor.ejs', {title: 'Express', login: login});
});
module.exports = router;
