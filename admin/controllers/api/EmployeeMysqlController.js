const CommonController = require('./CommonController');
const employee = require('../../models/Employee');

class EmployeeMysqlController extends CommonController {
    static get = async (req, res) => {
        try {
            const keyword = req.query.keyword;
            const data = await employee.findByFullname(keyword);
            this.success(res, data);
        } catch (error) {
            this.error(res, error);
        }
    }
}

module.exports = EmployeeMysqlController;
