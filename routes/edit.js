const router = require("./index");
const {Accounts} = require("../model/Accounts");
router.get('/edit/:id', (req, res) => {
    console.log('Request for edit received');
    const id = req.params.id;
    let account = Accounts.find(id, (row) => {
        res.render('../views/pages/edit', {accounts: row, login: login});
    });
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const user = {Password: req.body.Password, Role: req.body.Role, Email: req.body.Email,};
    console.log(user)
    Accounts.update(user, err => {
        if (err)
            console.error(err.message);
        res.redirect('/admin');

    })
});
module.exports = router;
