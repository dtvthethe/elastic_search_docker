const express = require('express');
const app = express();
const hostname = '0.0.0.0';
const port = 80;

// xử lý file .env
require('dotenv').config()
// xử lý post data
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views')

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const standardRouter = require('./routers/StandardRouter');
const employeeMysqlRouter = require('./routers/EmployeeMysqlRouter');
app.use('/', standardRouter);
app.use('/api/mysql/employees/', employeeMysqlRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
