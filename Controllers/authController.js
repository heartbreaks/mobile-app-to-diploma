module.exports.login = function(req, res) {
    res.status(200).json({
        login: {
            login: req.body.login,
            password: req.body.password
        }
    })
}