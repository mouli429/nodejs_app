class IndexController {
    getIndex(req, res) {
        res.send('Welcome to the Node.js application!');
    }
}

module.exports = IndexController;