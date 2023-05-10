"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Todo = function (props) {
    var _a = react_1.useState(''), newTaskTitle = _a[0], setnewTaskTitle = _a[1];
    var editTaskTitle = function (event) {
        setnewTaskTitle(event.target.value);
    };
    return (React.createElement("div", null,
        React.createElement("h3", null, props.title),
        React.createElement("div", null,
            React.createElement("input", { value: newTaskTitle, onChange: editTaskTitle }),
            React.createElement("button", { onClick: function () { return props.addTask(newTaskTitle); } }, "+")),
        React.createElement("ul", null, props.tasks &&
            props.tasks.map(function (task) {
                return (React.createElement("li", { key: task.id },
                    React.createElement("input", { type: 'checkbox', checked: task.isDone, onChange: function () { } }),
                    React.createElement("span", null, task.title),
                    React.createElement("button", { onClick: function () { return props.removeTask(task.id); } }, "-")));
            })),
        React.createElement("div", null,
            React.createElement("button", { onClick: function () { return props.changeFilter('all'); } }, "All"),
            React.createElement("button", { onClick: function () { return props.changeFilter('active'); } }, "Active"),
            React.createElement("button", { onClick: function () { return props.changeFilter('completed'); } }, "Completed"))));
};
exports["default"] = Todo;
