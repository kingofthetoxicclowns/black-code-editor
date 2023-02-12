const router = require("./index");
const {Accounts} = require("../model/Accounts");
router.get('/delete/:id', (req, res) => {
    console.log('Request for delete received');
    const id = req.params.id;
    let account = Accounts.find(id, (row) => {
        res.render('../views/pages/delete', {accounts: row, login: login});
    });
});

router.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    Accounts.delete(id, (err, result) => {
        if (err)
            console.error(err.message);
        res.redirect('/admin');
    });
});
module.exports = router;
