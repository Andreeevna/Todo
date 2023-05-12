"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var uuid_1 = require("uuid");
var Todo_1 = require("../todo/Todo");
var Todolist = function () {
    var tasks1 = [
        {
            id: uuid_1.v1(),
            title: 'workout',
            isDone: true
        },
        {
            id: uuid_1.v1(),
            title: 'grocery shopping',
            isDone: false
        },
        {
            id: uuid_1.v1(),
            title: 'meeting with friends',
            isDone: true
        },
        {
            id: uuid_1.v1(),
            title: 'meeting with friends',
            isDone: false
        },
    ];
    var _a = react_1.useState(tasks1), tasks = _a[0], setTasks = _a[1];
    var _b = react_1.useState('active'), filter = _b[0], setFilter = _b[1];
    var addTask = function (newTitle) {
        var newTask = {
            id: uuid_1.v1(),
            title: newTitle,
            isDone: false
        };
        var newTasks = __spreadArrays([newTask], tasks);
        setTasks(newTasks);
    };
    var removeTask = function (id) {
        var filtereTasks = tasks.filter(function (task) { return task.id !== id; });
        setTasks(filtereTasks);
    };
    var changeFilter = function (value) {
        setFilter(value);
    };
    var changeStatus = function (id, isDone) {
        var findTask = tasks.find(function (t) { return t.id === id; });
        if (findTask) {
            findTask.isDone = isDone;
        }
        setTasks(__spreadArrays(tasks));
    };
    var tasksForToDoList = tasks;
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter(function (task) { return task.isDone === true; });
    }
    if (filter === 'active') {
        tasksForToDoList = tasks.filter(function (task) { return task.isDone === false; });
    }
    return (React.createElement("div", { className: 'App' },
        React.createElement(Todo_1["default"], { title: 'Plans for today', tasks: tasksForToDoList, addTask: addTask, removeTask: removeTask, changeFilter: changeFilter, changeStatus: changeStatus, filter: filter })));
};
exports["default"] = Todolist;
