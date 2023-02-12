const db = require('./db');

class Accounts {
    static all(callback) {
        const sql = "SELECT * FROM Accounts ORDER BY Email"
        db.all(sql, [], (err, rows) => {
            if (err)
                return console.error(err.message);
            callback(rows);
        });
    }


    static login(id, callback) {
        db.get('select * from Accounts where Email = ? and Password = ?', id, (err, row) => {
            if (err)
                return console.error(err.message);
            callback(row);
        });
    }

    static find(id, callback) {
        db.get('select * from Accounts where Email = ?', id, (err, row) => {

            if (err)
                return console.error(err.message);
            callback(row);
        });
    }

    static create(data, callback) {
        const sql = 'insert into Accounts(Email, Password, Role) values (?, ?, ?)';
        const params = [data.Email, data.Password, data.Role];
        db.run(sql, params, callback);
    }

    static update(data, callback) {
        let sql = `update Accounts set Password = ? , Role = ? WHERE Email = ?`;
        const params = [data.Password, data.Role, data.Email];
        db.run(sql, params, callback);
        console.log("Succes")
    }

    static delete(id, callback) {
        if (!id)
            return callback(new Error('Please provide and Email'));
        db.run('delete from Accounts where Email = ?', id, callback);
    }
}

module.exports = db;
module.exports.Accounts = Accounts;