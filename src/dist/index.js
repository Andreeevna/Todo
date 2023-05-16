"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_redux_1 = require("react-redux");
require("./assets/styles/index.css");
var Router_1 = require("./components/routes/Router");
var store_1 = require("./redux/store");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(Router_1["default"], null))));
