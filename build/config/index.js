'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _login = require('../router/login');

var _login2 = _interopRequireDefault(_login);

var _factory = require('../router/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.post('/login', _login2.default);
    app.get('/factory', _factory2.default);
};
//# sourceMappingURL=index.js.map