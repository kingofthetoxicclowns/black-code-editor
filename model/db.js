const sqlite3 = require('sqlite3').verbose();

// open the database connection
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.serialize(() => {
    // Queries scheduled here will be serialized.
    db.run('CREATE TABLE IF NOT EXISTS Accounts (' +
        '  Email VARCHAR(100) PRIMARY KEY NOT NULL ,' +
        '  Password VARCHAR(100) NOT NULL,' +
        '  Role VARCHAR(100) NOT NULL);', err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of the 'Accounts' table");
    });
});

db.serialize(() => {
    const sql_insert = 'insert into Accounts(Email, Password, Role) values (?, ?, ?)';
    db.run(sql_insert, ['stefan@gmail.com', 'stefan123', 'Administrator'], err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of Admin Accounts");
    });
    db.run(sql_insert, ['bob@gmail.com', 'bob123', 'Guest'], err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of Guest Accounts");
    });
    db.run(sql_insert, ['dylan@gmail.com', 'dylan123', 'OrdinaryUser'], err => {
        if (err)
            return console.error(err.message);
        console.log("Successful creation of Ordinary User Accounts");
    });
});

//list all tables in the database
db.serialize(function () {
    db.all("select name from sqlite_master where type='table'", (err, table) => {
        console.log(table);
    });
    db.all('select * from Accounts', (err, Accounts) => {
        console.log(Accounts);

    });
});


module.exports = db