"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Todo_1 = require("./Todo");
function App() {
    var tasks1 = [
        {
            id: 1,
            title: 'workout',
            isDone: true
        },
        {
            id: 2,
            title: 'grocery shopping',
            isDone: false
        },
        {
            id: 3,
            title: 'meeting with friends',
            isDone: true
        },
        {
            id: 4,
            title: 'meeting with friends',
            isDone: false
        },
    ];
    var _a = react_1.useState(tasks1), tasks = _a[0], setTasks = _a[1];
    var _b = react_1.useState('active'), filter = _b[0], setFilter = _b[1];
    var removeTask = function (id) {
        var filtereTasks = tasks.filter(function (task) { return task.id !== id; });
        setTasks(filtereTasks);
    };
    var changeFilter = function (value) {
        setFilter(value);
    };
    var tasksForToDoList = tasks;
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter(function (task) { return task.isDone === true; });
    }
    if (filter === 'active') {
        tasksForToDoList = tasks.filter(function (task) { return task.isDone === false; });
    }
    return (React.createElement("div", { className: 'App' },
        React.createElement(Todo_1["default"], { title: 'Plans for today', tasks: tasksForToDoList, removeTask: removeTask, changeFilter: changeFilter })));
}
exports["default"] = App;
