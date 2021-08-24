const Proxy = require('./proxy');
function createProxy(...args) {
    return new Proxy(...args)
}

module.exports = createProxy