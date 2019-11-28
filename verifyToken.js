let jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.headers['auth-token']
    if (!token) return res.status(401).send("Access denied!")
    try {
        req.user = jwt.verify(token, process.env.TOKEN_SECRET)
        next()
    } catch (e) {
        res.status(400).send("Invalid token!")
    }
}


