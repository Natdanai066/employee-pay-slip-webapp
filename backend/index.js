const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'employeesystem',
})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employee1", (err, result) => {
        if (err) {
            console.log('error', err);
        } else {
            res.send(result)
        }
    })
})

app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    db.query("SELECT * FROM employee1 WHERE id = ?", [employeeId], (err, result) => {
        if (err) {
            console.log('error', err);
        } else {
            res.send(result)
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const employeeId = req.params.id;
    db.query("DELETE FROM employee1 WHERE id = ?", [employeeId], (err, result) => {
        if (err) {
            console.log('error', err);
        } else {
            res.send(result)
        }
    })
})

app.listen('3001', () => {
    console.log('Server is running on port 3001');
})