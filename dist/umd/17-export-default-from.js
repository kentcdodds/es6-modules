(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './say-hi'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./say-hi'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.sayHi);
    global.exportDefaultFrom = mod.exports;
  }
})(this, function (exports, _sayHi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_sayHi).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});