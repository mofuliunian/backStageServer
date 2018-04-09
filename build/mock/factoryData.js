'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockjs = require('mockjs');

var _mockjs2 = _interopRequireDefault(_mockjs);

var _bank = require('./bank');

var _bank2 = _interopRequireDefault(_bank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Random = _mockjs2.default.Random;

var data = [];

for (var i = 0; i < 100; i++) {
  data.push(_mockjs2.default.mock({
    'id': i,
    'name': Random.csentence(7, 10),
    'short_name': Random.csentence(3, 5),
    'device_no_range': Random.natural(0, 1000) + '-' + Random.natural(1000, 10000),
    'region_id': Random.county(true),
    'address': Random.county(true) + '' + Random.csentence(10, 20),
    'contacts': Random.cname(),
    'tel': /^1[385][1-9]\d{8}/,
    'email': Random.email(),
    'remark': Random.csentence(),
    'bank': Random.pick(_bank2.default),
    'bank_card_no': /^(622841|622824|622826|622848|620059|621282|622828|622823|621336|621619|622821|622822|622825|622827|622845|622849|623018|623206|621671|622840|622843|622844|622846|622847|620501)\d{13}$/,
    'bank_account_name': Random.cname(),
    'charger': Random.cname(),
    'charger_mobile': /^1[385][1-9]\d{8}/,
    'charger_email': Random.email(),
    'charger_qq': /^[1-9]\d{4,9}$/,
    'charger_weixin': /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/,
    'account_name': Random.csentence(7, 10),
    'account_password': Random.integer(1000000),
    'creater': Random.cname(),
    'modifier': Random.cname(),
    'create_time': Random.datetime('y-M-d H:m:s'),
    'modify_time': Random.datetime('y-M-d H:m:s')
  }));
}

exports.default = data;
//# sourceMappingURL=factoryData.js.map