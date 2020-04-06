class Organization {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getNetSalaries() {
        return this.employees.reduce((netSalary, employee) => netSalary + employee.getSalary(), 0);
    }
}

module.exports = Organization;
