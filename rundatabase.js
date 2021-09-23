const sqlite3 = require('sqlite3').verbose();

function connect(){
    let db = new sqlite3.Database('./db/mydb.sqlite', (err) => {
        if (err) {
            return
        }
        console.log("Connected to the database");
    })
    return db;
}

function init(db) {
    db.serialize(() => {
        db.run('CREATE TABLE IF NOT EXISTS users (userID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);', (err) => {
            if (err) { console.log(err) } else {console.log("creating table users")}
        })
        db.run('INSERT INTO users (name) VALUES ("Melissa", ("Bruno")', (err) => {
            if (err) {console.log(err) } else {console.log("inserting  users")}
        })
    })
}
module.exports = {connect, init};