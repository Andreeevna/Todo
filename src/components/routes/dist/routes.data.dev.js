"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _Auth = _interopRequireDefault(require("../screens/auth/Auth"));

var _Todolist = _interopRequireDefault(require("../screens/todolist/Todolist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Todolist["default"] // isAuth: true

}, {
  path: '/auth',
  component: _Auth["default"] // isAuth: false

}];
exports.routes = routes;