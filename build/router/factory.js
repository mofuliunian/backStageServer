'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _factoryData = require('../mock/factoryData');

var _factoryData2 = _interopRequireDefault(_factoryData);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/factory', function (req, res) {
  var query = _url2.default.parse(req.url, true).query;
  console.log(query);
  var data = _factoryData2.default.slice((query.page - 1) * query.pageNum, query.page * query.pageNum);
  res.json({
    code: 1,
    massage: '请求成功',
    data: data,
    sum: _factoryData2.default.length
  });
});

exports.default = router;
//# sourceMappingURL=factory.js.map