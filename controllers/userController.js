
const userAction = require('./lib');

module.exports = function (app) {
    app.post('/signup', userAction.signup)
}