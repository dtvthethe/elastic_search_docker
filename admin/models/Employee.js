const pool = require('./db');

class Employee {
    constructor(emp_no, birth_date, full_name, gender, hire_date) {
        this.emp_no = emp_no;
        this.birth_date = birth_date;
        this.full_name = full_name;
        this.gender = gender;
        this.hire_date = hire_date;
    }

    findByFullname = async (keyword) => {
        const [rows, fields] = await pool.execute(`SELECT * FROM view_employee WHERE full_name LIKE ? ORDER BY emp_no DESC LIMIT 20`, [`%${keyword}%`]);
        const employess = rows.map(row => this.convertToObject(row));

        return employess;
    }

    convertToObject = (row) => {
        return new Employee(row.emp_no, row.birth_date, row.full_name, row.gender, row.hire_date);
    }
}

module.exports = new Employee();
