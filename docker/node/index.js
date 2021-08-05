const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    var Moniker = require('moniker');
    var names = Moniker.generator([Moniker.adjective, Moniker.noun]);
    var name = names.choose();
    
    const sql = `INSERT INTO people(name) values('` + name + `')`
    connection.query(sql)
    console.log('Nome ' + name + ' inserido');

    connection.query("SELECT name FROM people", (err, result, fields) => {        
        if(err) {
            console.log(err); 
            res.json({"error":true});
        }
        else { 
            console.log(result);
            res.render(__dirname + '/views', { userData: result })
        }
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})