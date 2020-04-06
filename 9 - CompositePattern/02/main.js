const Developer = require('./Developer');
const Designer = require('./Designer');
const Organization = require('./Organization');

// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane', 10000);

// Add them to organization
const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log('Net salaries: ', organization.getNetSalaries()); // Net Salaries: 22000
