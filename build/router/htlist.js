'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _menuData = require('../../src/mock/menuData');

var _menuData2 = _interopRequireDefault(_menuData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/api/htlist', function (req, res) {
  res.json(_menuData2.default);
});

exports.default = router;
//# sourceMappingURL=htlist.js.map