class CommonController {
    static error = (res, error) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send({
            message: error.message,
            error: error
        });
    }

    static success = (res, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(data);
    }

    static debug = (res, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({
            data: data
        });
    }
}

module.exports = CommonController;
