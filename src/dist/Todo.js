"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Todo = function (props) {
    var _a = react_1.useState(''), newTaskTitle = _a[0], setnewTaskTitle = _a[1];
    var editTaskTitleChangeHandler = function (event) {
        setnewTaskTitle(event.target.value);
    };
    var addNewTask = function () {
        if (newTaskTitle.trim() === '')
            return;
        props.addTask(newTaskTitle);
        setnewTaskTitle('');
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
    return (React.createElement("div", null,
        React.createElement("h3", null, props.title),
        React.createElement("div", null,
            React.createElement("input", { value: newTaskTitle, onChange: editTaskTitleChangeHandler }),
            React.createElement("button", { onClick: addNewTask }, "+")),
        React.createElement("ul", null, props.tasks &&
            props.tasks.map(function (task) {
                var onChangeHandler = function (e) {
                    props.changeStatus(task.id, e.target.checked);
                };
                return (React.createElement("li", { key: task.id },
                    React.createElement("input", { type: 'checkbox', checked: task.isDone, onChange: onChangeHandler }),
                    React.createElement("span", null, task.title),
                    React.createElement("button", { onClick: function () { return props.removeTask(task.id); } }, "-")));
            })),
        React.createElement("div", null,
            React.createElement("button", { onClick: onAllClickHandler }, "All"),
            React.createElement("button", { onClick: onActiveClickHandler }, "Active"),
            React.createElement("button", { onClick: onCompletedClickHandler }, "Completed"))));
};
exports["default"] = Todo;
