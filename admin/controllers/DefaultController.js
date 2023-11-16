class DefaultController {
    static index = async (req, res) => {
        try {
            res.render('default/index', {});
        } catch (error) {
            res.setHeader('Content-Type', 'application/json');
            res.status(500).send({
                message: error.message,
                error: error
            });
        }
    }
}

module.exports = DefaultController;
