"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Customer = function Customer(name, age) {
  var _this = this;

  _classCallCheck(this, Customer);

  _defineProperty(this, "sayHello", function () {
    console.log("Hello ".concat(_this.name, ", ").concat(_this.age));
  });

  this.name = name;
  this.age = age;
};

var _default = Customer;
exports["default"] = _default;