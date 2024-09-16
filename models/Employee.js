
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const EmployeeModel = mongoose.model('Employee', EmployeeSchema); // Model creation

module.exports = EmployeeModel;