"use strict";
exports.__esModule = true;
var Todo = function (props) {
    return (React.createElement("div", null,
        React.createElement("h3", null, props.title),
        React.createElement("div", null,
            React.createElement("input", null),
            React.createElement("button", null, "+")),
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
