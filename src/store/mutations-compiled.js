'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _types$ADD_TOTAL_TIME;

var _mutationTypes = require('./mutation-types');

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_types$ADD_TOTAL_TIME = {}, (0, _defineProperty3.default)(_types$ADD_TOTAL_TIME, types.ADD_TOTAL_TIME, function (state, time) {
  state.totalTime = state.totalTime + time;
}), (0, _defineProperty3.default)(_types$ADD_TOTAL_TIME, types.DEC_TOTAL_TIME, function (state, time) {
  state.totalTime = state.totalTime - time;
}), (0, _defineProperty3.default)(_types$ADD_TOTAL_TIME, types.SAVE_PLAN, function (state, plan) {
  var avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';

  state.list.push((0, _assign2.default)({ name: '二哲', avatar: avatar }, plan));
}), (0, _defineProperty3.default)(_types$ADD_TOTAL_TIME, types.DELETE_PLAN, function (state, idx) {
  state.list.splice(idx, 1);
}), _types$ADD_TOTAL_TIME);

//# sourceMappingURL=mutations-compiled.js.map