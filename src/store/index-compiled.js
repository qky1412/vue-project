'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
  totalTime: 0,
  list: []
};

exports.default = new _vuex2.default.Store({
  state: state,
  mutations: _mutations2.default,
  actions: _actions2.default
});

//# sourceMappingURL=index-compiled.js.map