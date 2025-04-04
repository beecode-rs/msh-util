"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUtil = void 0;
var _lodash = _interopRequireDefault(require("lodash.clonedeep"));
var _util = _interopRequireDefault(require("util"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var ObjectUtil = exports.ObjectUtil = /*#__PURE__*/function () {
  function ObjectUtil() {
    _classCallCheck(this, ObjectUtil);
  }
  return _createClass(ObjectUtil, [{
    key: "deepClone",
    value:
    /**
     * Deep clone object. Returned object will have no references to the object passed through params
     * @template T
     * @param {T} objectToClone
     * @return {T}
     */
    function deepClone(objectToClone) {
      return (0, _lodash["default"])(objectToClone);
    }

    /**
     * Pick only properties from the property list. It is only allowed to pick properties from the first level
     * @template T
     * @template L
     * @param {T} obj
     * @param {L[]} keyList
     * @return {Pick<T, L>}
     */
  }, {
    key: "pickByList",
    value: function pickByList(obj, keyList) {
      return keyList.reduce(function (pickedObj, key) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          pickedObj[key] = obj[key];
        }
        return pickedObj;
      }, {}); // eslint-disable-line @typescript-eslint/prefer-reduce-type-parameter
    }

    /**
     * Pick objects properties using keys from the second object.
     * @template T
     * @template L
     * @param {T} obj
     * @param {Partial<T>} objWithPickKeys
     * @return {Pick<T, L>}
     */
  }, {
    key: "pickByObjectKeys",
    value: function pickByObjectKeys(obj, objWithPickKeys) {
      var keys = Object.keys(objWithPickKeys);
      return this.pickByList(obj, keys);
    }

    /**
     * This function will do stringify deeper that JSON.stringify.
     * @param {any} entity - entity thant needs to be stringify
     * @param {object} [options] - available options
     * @param {boolean} [options.isSortable=false] - if object property should be sorted
     * @param {boolean} [options.isPrettyPrinted=false] - if object and array properties should be printed in a new row
     * @param {number} [options.prettyPrintCompactLevel=0] - if pretty print is on define the level of deepest children that are not
     * going to be pretty. It doesn't matter if the siblings doesn't have the same depth.
     * @return {string} - strung result
     * @example
     * console.log(new ObjectUtil().deepStringify(null)) // 'null'
     * console.log(new ObjectUtil().deepStringify(undefined)) // 'undefined'
     * console.log(new ObjectUtil().deepStringify({ a: 1 })) // '{\n\ta: 1\n}'
     * // `{
     * //   a:1
     * // }`
     * console.log(new ObjectUtil().deepStringify({ b: 1, a: 2 }, {isSorted:true, compact: true})) // { a: 2, b: 1 }
     */
  }, {
    key: "deepStringify",
    value: function deepStringify(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entity, options) {
      var _ref = options !== null && options !== void 0 ? options : {},
        _ref$isSorted = _ref.isSorted,
        isSorted = _ref$isSorted === void 0 ? false : _ref$isSorted,
        _ref$isPrettyPrinted = _ref.isPrettyPrinted,
        isPrettyPrinted = _ref$isPrettyPrinted === void 0 ? false : _ref$isPrettyPrinted,
        _ref$prettyPrintCompa = _ref.prettyPrintCompactLevel,
        prettyPrintCompactLevel = _ref$prettyPrintCompa === void 0 ? 0 : _ref$prettyPrintCompa;
      var compact = this._deepStringifyCompact({
        isPrettyPrinted: isPrettyPrinted,
        prettyPrintCompactLevel: prettyPrintCompactLevel
      });
      return _util["default"].inspect(entity, {
        breakLength: Infinity,
        compact: compact,
        depth: Infinity,
        maxArrayLength: Infinity,
        maxStringLength: Infinity,
        sorted: isSorted
      });
    }
  }, {
    key: "_deepStringifyCompact",
    value: function _deepStringifyCompact(params) {
      var isPrettyPrinted = params.isPrettyPrinted,
        prettyPrintCompactLevel = params.prettyPrintCompactLevel;
      if (!isPrettyPrinted) {
        return true;
      }
      return prettyPrintCompactLevel;
    }

    /**
     * We are converting objects to string (or null or undefined) and comparing if the result is equal
     * @param a
     * @param b
     * @return {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "deepEqual",
    value: function deepEqual(a, b) {
      return this.deepStringify(a, {
        isSorted: true
      }) === this.deepStringify(b, {
        isSorted: true
      });
    }

    /**
     * This function is going to convert any null to undefined in the object that is passed to it.
     * @template T
     * @param {T} objectWithNulls
     * @return {T}
     * @example
     * console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
     */
  }, {
    key: "deepNullToUndefined",
    value: function deepNullToUndefined(objectWithNulls) {
      var _this = this;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return Object.entries(objectWithNulls).reduce(function (acc, cur) {
        var _cur = _slicedToArray(cur, 2),
          key = _cur[0],
          value = _cur[1];
        if (value === null) {
          acc[key] = undefined;
        } else if (_typeof(value) === 'object' && !(value instanceof Date)) {
          acc[key] = _this.deepNullToUndefined(value);
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
    }
  }]);
}();