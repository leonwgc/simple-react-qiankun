'use strict';

var React = require('react');
var qiankun = require('qiankun');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var QKMicroAppRender = function QKMicroAppRender(_ref) {
  var app = _ref.app,
      configuration = _ref.configuration;
  var containerRef = React.useRef();
  var appRef = React.useRef(null);
  React.useEffect(function () {
    appRef.current = qiankun.loadMicroApp(_objectSpread2(_objectSpread2({}, app), {}, {
      container: containerRef.current
    }), configuration);
    var _app$entry = app.entry,
        entry = _app$entry === void 0 ? '' : _app$entry;

    if (typeof entry === 'string') {
      var hashIndex = entry.indexOf('#');

      if (hashIndex > -1) {
        var hash = entry.slice(hashIndex + 1);

        if (location.hash != hash) {
          location.hash = hash;
        }
      }
    }

    return function () {
      appRef.current.unmount();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: containerRef
  });
};

module.exports = QKMicroAppRender;
