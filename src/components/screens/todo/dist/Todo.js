"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var react_1 = require("react");
var Todo_module_css_1 = require("./Todo.module.css");
var Todo = function (props) {
    var _a = react_1.useState(''), newTaskTitle = _a[0], setnewTaskTitle = _a[1];
    var _b = react_1.useState(''), error = _b[0], setError = _b[1];
    var editTaskTitleChangeHandler = function (event) {
        setnewTaskTitle(event.target.value);
    };
    var addNewTask = function () {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle);
            setnewTaskTitle('');
        }
        else {
            setError('The title is required');
        }
    };
    var onAllClickHandler = function () {
        props.changeFilter('all');
    };
    var onActiveClickHandler = function () {
        props.changeFilter('active');
    };
    var onCompletedClickHandler = function () {
        props.changeFilter('completed');
    };
    var onKeyPressHandler = function (e) {
        setError('');
    };
    return (React.createElement("div", { className: classnames_1["default"](Todo_module_css_1["default"].todo__wrapper, Todo_module_css_1["default"].todo) },
        React.createElement("h3", { className: Todo_module_css_1["default"].todo__title }, props.title),
        React.createElement("div", { className: Todo_module_css_1["default"].todo__new_task },
            React.createElement("input", { className: classnames_1["default"](Todo_module_css_1["default"].todo__input, { error: error }), placeholder: 'Enter a new task...', type: 'text', value: newTaskTitle, onChange: editTaskTitleChangeHandler, onKeyPress: onKeyPressHandler }),
            React.createElement("button", { className: Todo_module_css_1["default"].button__add_task, onClick: addNewTask }, "+"),
            error && React.createElement("div", { className: 'error-message' }, error)),
        React.createElement("ul", { className: Todo_module_css_1["default"].todo__list }, props.tasks &&
            props.tasks.map(function (task) {
                var onChangeHandler = function (e) {
                    props.changeStatus(task.id, e.target.checked);
                };
                return (React.createElement("li", { key: task.id, className: classnames_1["default"](Todo_module_css_1["default"].todo__list_item, task.isDone === true ? 'is-done' : '') },
                    React.createElement("input", { type: 'checkbox', checked: task.isDone, onChange: onChangeHandler }),
                    React.createElement("span", null, task.title),
                    React.createElement("button", { onClick: function () { return props.removeTask(task.id); } }, "-")));
            })),
        React.createElement("div", { className: Todo_module_css_1["default"].buttons },
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, props.filter === 'all' ? 'active-filter' : ''), onClick: onAllClickHandler }, "All"),
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, props.filter === 'active' ? 'active-filter' : ''), onClick: onActiveClickHandler }, "Active"),
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, props.filter === 'completed' ? 'active-filter' : ''), onClick: onCompletedClickHandler }, "Completed"))));
};
exports["default"] = Todo;
