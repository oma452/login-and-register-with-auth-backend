const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Import bcrypt
const app = express();

app.use(express.json());
app.use(cors());

const EmployeeModel = require('./models/Employee');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // Compare hashed password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return res.status(500).json("Server error");
                    }
                    if (isMatch) {
                        res.json('success');
                    } else {
                        res.json("The password is incorrect");
                    }
                });
            } else {
                res.json("No record exists");
            }
        })
        .catch(err => res.status(500).json(err));
});

app.post('/register', (req, res) => {
    // Hash the password before saving
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json("Server error");
        }
        const newEmployee = {
            email,
            password: hashedPassword
        };
        console.log(hashedPassword)
        EmployeeModel.create(newEmployee)
            .then(employee => res.json(employee))
            .catch(err => res.status(500).json(err));
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
