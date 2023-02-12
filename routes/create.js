const router = require("./index");
const {Accounts} = require("../model/Accounts");
router.get('/create', (req, res, next) => {
    console.log('Request for create received');
    res.render('../views/pages/create', {title: 'Express', login: login, errorMessage: ''});
});

router.post('/create', (req, res) => {
    const account = {Email: req.body.Email, Password: req.body.Password, Role: req.body.Role};
    let id = req.body.Email;
    Accounts.find(id, (row) => {
        if (row) {
            res.render('../views/pages/create', {
                title: 'Express',
                login: login,
                errorMessage: "A user with this email already exists."
            });
        } else {
            Accounts.create(account, err => {
                if (err)
                    console.error(err.message);
                res.redirect('/login');
            });
        }

    });

});
module.exports = router;
