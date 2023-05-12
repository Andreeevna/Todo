"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var NotFound_1 = require("../screens/not-found/NotFound");
var routes_data_1 = require("./routes.data");
var Router = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            routes_data_1.routes.map(function (route) {
                return (React.createElement(react_router_dom_1.Route, { key: route.path, path: route.path, element: React.createElement(route.component, null) }));
            }),
            React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1["default"], null) }))));
};
exports["default"] = Router;
