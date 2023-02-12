const router = require("./index");
const {Accounts} = require("../model/Accounts");
router.get('/admin', (req, res) => {
    console.log('Request for admin page received');
    let account = Accounts.all(rows => {
        res.render('../views/pages/admin', {accounts: rows, login: login});
    });
});
module.exports = router;
