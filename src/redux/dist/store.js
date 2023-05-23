"use strict";
exports.__esModule = true;
exports.useAppDispatch = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
var TaskSlice_1 = require("./slices/TaskSlice");
var TodoSlice_1 = require("./slices/TodoSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        todo: TodoSlice_1["default"],
        task: TaskSlice_1["default"]
    }
});
exports.useAppDispatch = function () { return react_redux_1.useDispatch(); };
