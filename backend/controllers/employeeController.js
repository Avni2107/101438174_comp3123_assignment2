const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).send({ message: 'Employee not found!' });
    res.send(employee);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).send({ message: 'Employee not found!' });
    res.send(employee);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).send({ message: 'Employee not found!' });
    res.send({ message: 'Employee deleted successfully!' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

