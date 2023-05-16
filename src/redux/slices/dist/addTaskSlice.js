"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
exports.__esModule = true;
exports.changeStatusTask = exports.removeCurrentTask = exports.addNewTask = exports.addTaskSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var uuid_1 = require("uuid");
var initialState = {
    tasks1: [
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
    ]
};
exports.addTaskSlice = toolkit_1.createSlice({
    name: 'addTask',
    initialState: initialState,
    reducers: {
        addNewTask: function (state, action) {
            var newTask = {
                id: uuid_1.v1(),
                title: action.payload,
                isDone: false
            };
            state.tasks1 = __spreadArrays([newTask], state.tasks1);
        },
        removeCurrentTask: function (state, action) {
            state.tasks1 = state.tasks1.filter(function (task) { return task.id !== action.payload; });
        },
        changeStatusTask: function (state, action) {
            var findTask = state.tasks1.find(function (t) { return t.id === action.payload.id; });
            if (findTask) {
                findTask.isDone = action.payload.isDone;
            }
            state.tasks1 = __spreadArrays(state.tasks1);
        }
    }
});
exports.addNewTask = (_a = exports.addTaskSlice.actions, _a.addNewTask), exports.removeCurrentTask = _a.removeCurrentTask, exports.changeStatusTask = _a.changeStatusTask;
exports["default"] = exports.addTaskSlice.reducer;
