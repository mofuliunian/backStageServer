'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/login', function (req, res) {
  var body = req.body;
  res.json({
    code: 1,
    massage: '登陆成功',
    url: 'http://localhost:8080'
  });
});

exports.default = router;
//# sourceMappingURL=login.js.map