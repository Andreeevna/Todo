"use strict";
exports.__esModule = true;
exports.useAppDispatch = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
var changeTaskSlice_1 = require("./slices/changeTaskSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        addTask: changeTaskSlice_1["default"]
    }
});
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
