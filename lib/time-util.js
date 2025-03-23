"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeUtil = exports.DurationUnit = void 0;
var _add2 = require("date-fns/add");
var _addMilliseconds = require("date-fns/addMilliseconds");
var _format = require("date-fns/format");
var _parse = require("date-fns/parse");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DurationUnit = exports.DurationUnit = /*#__PURE__*/function (DurationUnit) {
  DurationUnit["MILLISECOND"] = "MILLISECOND";
  DurationUnit["SECOND"] = "SECOND";
  DurationUnit["MINUTE"] = "MINUTE";
  DurationUnit["HOUR"] = "HOUR";
  DurationUnit["DAY"] = "DAY";
  DurationUnit["WEEK"] = "WEEK";
  DurationUnit["MONTH"] = "MONTH";
  DurationUnit["YEAR"] = "YEAR";
  return DurationUnit;
}({});
var TimeUtil = exports.TimeUtil = /*#__PURE__*/function () {
  function TimeUtil() {
    _classCallCheck(this, TimeUtil);
  }
  return _createClass(TimeUtil, [{
    key: "now",
    value:
    /**
     * return date object with the current time
     * @return {Date}
     * @example
     * console.log(new TimeUtil().now().toISOString()) // 2023-03-08T19:45:01.991Z
     */
    function now() {
      return new Date();
    }

    /**
     * Convert date object to unix timestamp (milliseconds)
     * @param {Date} date
     * @return {number}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701991
     */
  }, {
    key: "dateToUnix",
    value: function dateToUnix(date) {
      return +(0, _format.format)(date, 'T');
    }

    /**
     * Convert date object to unix timestamp (seconds)
     * @param {Date} date
     * @return {number}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701
     */
  }, {
    key: "dateToUnixSec",
    value: function dateToUnixSec(date) {
      return +(0, _format.format)(date, 't');
    }

    /**
     * Convert unix timestamp (milliseconds) to date object
     * @param {number} unix
     * @return {Date}
     * @example
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.unixToDate(1678304701991).toISOString()) // 2023-03-08T19:45:01.991Z
     */
  }, {
    key: "unixToDate",
    value: function unixToDate(unix) {
      return (0, _parse.parse)(unix.toString(), 'T', this.now());
    }

    /**
     * Convert unix timestamp (seconds) to date object
     * @param {number} unix
     * @return {Date}
     * @example
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.unixToDate(1678304701).toISOString()) // 2023-03-08T19:45:01.000Z
     */
  }, {
    key: "unixSecToDate",
    value: function unixSecToDate(unix) {
      return (0, _parse.parse)(unix.toString(), 't', this.now());
    }

    /**
     * Change the value of date by unit/value pare.
     * @param {{units: DurationUnitType, value: number, date: Date}} params
     * @return {Date}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.addToDate({date: timeUtil.now(), unit: 'DAY', value: 1 }).toISOString()) // 2023-03-09T19:45:01.991Z
     * console.log(timeUtil.addToDate({date: timeUtil.now(), unit: DurationUnit.MONTH, value: -1 }).toISOString()) //2023-02-08T19:45:01.991Z
     */
  }, {
    key: "addToDate",
    value: function addToDate(params) {
      var date = params.date,
        unit = params.unit,
        value = params.value;
      if (unit === 'MILLISECOND') {
        return (0, _addMilliseconds.addMilliseconds)(date, value);
      }
      return (0, _add2.add)(date, _defineProperty({}, "".concat(unit.toLowerCase(), "s"), value));
    }
  }]);
}();