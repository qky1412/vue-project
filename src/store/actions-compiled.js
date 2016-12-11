'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mutationTypes = require('./mutation-types');

var types = _interopRequireWildcard(_mutationTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  addTotalTime: function addTotalTime(_ref, time) {
    var commit = _ref.commit;

    commit(types.ADD_TOTAL_TIME, time);
  },
  decTotalTime: function decTotalTime(_ref2, time) {
    var commit = _ref2.commit;

    commit(types.DEC_TOTAL_TIME, time);
  },
  savePlan: function savePlan(_ref3, plan) {
    var commit = _ref3.commit;

    commit(types.SAVE_PLAN, plan);
  },
  deletePlan: function deletePlan(_ref4, plan) {
    var commit = _ref4.commit;

    commit(types.DELETE_PLAN, plan);
  }
};

//# sourceMappingURL=actions-compiled.js.map