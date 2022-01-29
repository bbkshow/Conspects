"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var customer = "John Doe";

var _status = /*#__PURE__*/new WeakMap();

var User = function User(name, age) {
  var _this = this;

  _classCallCheck(this, User);

  _status.set(this, {
    writable: true,
    value: void 0
  });

  _defineProperty(this, "sayHello", function () {
    console.log("Hello ".concat(_this.name, ", ").concat(_this.age, ", ").concat(_classPrivateFieldGet(_this, _status)));
  });

  this.name = name;
  this.age = age;

  _classPrivateFieldSet(this, _status, "Admin");
};

var _default = Customer;
exports["default"] = _default;
module.exports = {
  customer: customer,
  User: User
};