'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _TimeEntries = require('./components/TimeEntries.vue');

var _TimeEntries2 = _interopRequireDefault(_TimeEntries);

require('bootstrap/dist/css/bootstrap.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vueResource2.default);

var routes = [{
  path: '/',
  component: _Home2.default
}, {
  path: '/home',
  component: _Home2.default
}, {
  path: '/time-entries',
  component: _TimeEntries2.default,
  children: [{
    path: 'log-time',

    component: function component(resolve) {
      return require(['./components/LogTime.vue'], resolve);
    }
  }]
}];

var router = new _vueRouter2.default({
  routes: routes
});

new _vue2.default((0, _extends3.default)({
  el: '#app',
  template: '<App/>',
  router: router,
  store: _store2.default
}, _App2.default));

//# sourceMappingURL=main-compiled.js.map