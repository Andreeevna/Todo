"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var changeTaskSlice_1 = require("../../../redux/slices/changeTaskSlice");
var Layout_1 = require("../../layout/Layout");
var Todo_1 = require("../todo/Todo");
var Todolist_module_css_1 = require("./Todolist.module.css");
var Todolist = function () {
    var dispatch = react_redux_1.useDispatch();
    var addTask = function (newTitle) {
        dispatch(changeTaskSlice_1.addNewTask(newTitle));
    };
    var removeTask = function (id) {
        dispatch(changeTaskSlice_1.removeCurrentTask(id));
    };
    var changeStatus = function (id, isDone) {
        dispatch(changeTaskSlice_1.changeStatusTask({ id: id, isDone: isDone }));
    };
    return (React.createElement(Layout_1["default"], null,
        React.createElement("div", { className: Todolist_module_css_1["default"].todolist },
            React.createElement(Todo_1["default"], { title: 'Plans for today', addTask: addTask, removeTask: removeTask, changeStatus: changeStatus }))));
};
exports["default"] = Todolist;
