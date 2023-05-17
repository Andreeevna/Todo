"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var classnames_1 = require("classnames");
var react_1 = require("react");
var Todo_module_css_1 = require("./Todo.module.css");
var react_redux_1 = require("react-redux");
var Todo = function (props) {
    var tasks = react_redux_1.useSelector(function (state) { return state.addTask.tasks1; });
    var _a = react_1.useState(''), error = _a[0], setError = _a[1];
    var _b = react_1.useState('all'), filter = _b[0], setFilter = _b[1];
    if (filter === 'completed') {
        tasks = __spreadArrays(tasks.filter(function (task) { return task.isDone === true; }));
    }
    if (filter === 'active') {
        tasks = __spreadArrays(tasks.filter(function (task) { return task.isDone === false; }));
    }
    var changeFilter = function (value) {
        setFilter(value);
    };
    var onAllClickHandler = function () {
        changeFilter('all');
    };
    var onActiveClickHandler = function () {
        changeFilter('active');
    };
    var onCompletedClickHandler = function () {
        changeFilter('completed');
    };
    var onKeyPressHandler = function (e) {
        setError('');
    };
    var _c = react_1.useState(''), newTaskTitle = _c[0], setnewTaskTitle = _c[1];
    var editTaskTitleChangeHandler = function (event) {
        setnewTaskTitle(event.target.value);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle);
            setnewTaskTitle('');
        }
        else {
            setError('The title is required');
        }
    };
    return (React.createElement("div", { className: classnames_1["default"](Todo_module_css_1["default"].todo__wrapper, Todo_module_css_1["default"].todo) },
        React.createElement("h3", { className: Todo_module_css_1["default"].todo__title }, props.title),
        React.createElement("form", { onSubmit: handleSubmit, className: Todo_module_css_1["default"].todo__new_task },
            React.createElement("input", { className: classnames_1["default"](Todo_module_css_1["default"].todo__input, { error: error }), placeholder: 'Enter a new task...', type: 'text', value: newTaskTitle, onChange: editTaskTitleChangeHandler, onKeyPress: onKeyPressHandler }),
            React.createElement("button", { className: Todo_module_css_1["default"].button__add_task }, "+"),
            error && React.createElement("div", { className: 'error-message' }, error)),
        React.createElement("ul", { className: Todo_module_css_1["default"].todo__list }, (tasks &&
            tasks.every(function (t) { return t.isDone === true && filter === 'active'; })) ||
            tasks.every(function (t) { return t.isDone === false && filter === 'completed'; }) ? (React.createElement("div", null, "No tasks")) : (tasks.map(function (task) {
            var onChangeHandler = function (e) {
                props.changeStatus(task.id, e.target.checked);
            };
            return (React.createElement("li", { key: task.id, className: classnames_1["default"](Todo_module_css_1["default"].todo__list_item, task.isDone === true ? 'is-done' : '') },
                React.createElement("input", { type: 'checkbox', id: task.id, checked: task.isDone, onChange: onChangeHandler }),
                React.createElement("label", { htmlFor: task.id }, task.title),
                React.createElement("button", { onClick: function () { return props.removeTask(task.id); } }, "-")));
        }))),
        React.createElement("div", { className: Todo_module_css_1["default"].buttons },
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, filter === 'all' ? 'active-filter' : ''), onClick: onAllClickHandler }, "All"),
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, filter === 'active' ? 'active-filter' : ''), onClick: onActiveClickHandler }, "Active"),
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, filter === 'completed' ? 'active-filter' : ''), onClick: onCompletedClickHandler }, "Completed"))));
};
exports["default"] = Todo;
