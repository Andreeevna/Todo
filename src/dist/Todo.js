"use strict";
exports.__esModule = true;
var react_1 = require("react");
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
    return (React.createElement("div", null,
        React.createElement("h3", null, props.title),
        React.createElement("div", null,
            React.createElement("input", { value: newTaskTitle, onChange: editTaskTitleChangeHandler, onKeyPress: onKeyPressHandler, className: error ? 'error' : '' }),
            React.createElement("button", { onClick: addNewTask }, "+"),
            error && React.createElement("div", { className: 'error-message' }, error)),
        React.createElement("ul", null, props.tasks &&
            props.tasks.map(function (task) {
                var onChangeHandler = function (e) {
                    props.changeStatus(task.id, e.target.checked);
                };
                return (React.createElement("li", { key: task.id, className: task.isDone === true ? 'is-done' : '' },
                    React.createElement("input", { type: 'checkbox', checked: task.isDone, onChange: onChangeHandler }),
                    React.createElement("span", null, task.title),
                    React.createElement("button", { onClick: function () { return props.removeTask(task.id); } }, "-")));
            })),
        React.createElement("div", null,
            React.createElement("button", { className: props.filter === 'all' ? 'active-filter' : '', onClick: onAllClickHandler }, "All"),
            React.createElement("button", { className: props.filter === 'active' ? 'active-filter' : '', onClick: onActiveClickHandler }, "Active"),
            React.createElement("button", { className: props.filter === 'completed' ? 'active-filter' : '', onClick: onCompletedClickHandler }, "Completed"))));
};
exports["default"] = Todo;
