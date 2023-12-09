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

// INSERT
app.post('/insert', (req, res) => {
    const sql = "INSERT INTO employee1 (firstname, lastname, department, phonenumber, salary,StartDate,month,year,identificationnumber) VALUES (?)";
    const value = [
        req.body.firstname,
        req.body.lastname,
        req.body.department,
        req.body.phonenumber,
        req.body.salary,
        req.body.StartDate,
        req.body.month,
        req.body.year,
        req.body.identificationnumber

    ]
    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
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

app.put('/update', (req, res) => {
    const id = req.body.id;
    const wage = req.body.wage;
    db.query("UPDATE employee1 SET wage = ? WHERE id =?", [wage, id], (err, result => {
        if (err) {
            console.lof(err);
        } else
            res.send(result);
    }))
});



app.listen('3001', () => {
    console.log('Server is running on port 3001');
})