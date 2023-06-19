const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'Hasan') {
        req.user = { name: 'hasan', id: 5 }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
    console.log('authorized')
    next()
}

module.exports = authorize