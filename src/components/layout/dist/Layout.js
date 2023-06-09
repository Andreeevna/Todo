"use strict";
exports.__esModule = true;
var Header_1 = require("../header/Header");
var Layout_module_css_1 = require("./Layout.module.css");
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: Layout_module_css_1["default"].wrapper }, children && React.createElement("div", null, children))));
};
exports["default"] = Layout;
