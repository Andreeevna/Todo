"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var date_svg_1 = require("./../../assets/icon/date.svg");
var search_svg_1 = require("./../../assets/icon/search.svg");
var Profile_png_1 = require("./../../assets/img/Profile.png");
var Layout_module_css_1 = require("./../layout/Layout.module.css");
var Header_module_css_1 = require("./Header.module.css");
var Header = function () {
    return (React.createElement("div", { className: Header_module_css_1["default"].wrapper__header },
        React.createElement("div", { className: classnames_1["default"](Header_module_css_1["default"].header, Layout_module_css_1["default"].wrapper) },
            React.createElement("h1", { className: Header_module_css_1["default"].header__title }, "Todolist"),
            React.createElement("div", { className: Header_module_css_1["default"].header__item },
                React.createElement("img", { src: search_svg_1["default"] }),
                React.createElement("img", { src: date_svg_1["default"] }),
                React.createElement("span", null, "19 May 2022"),
                React.createElement("img", { className: Header_module_css_1["default"].header__img, src: Profile_png_1["default"] })))));
};
exports["default"] = Header;
