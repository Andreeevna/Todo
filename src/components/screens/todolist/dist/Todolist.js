"use strict";
exports.__esModule = true;
var react_1 = require("react");
var uuid_1 = require("uuid");
var react_redux_1 = require("react-redux");
var addTaskSlice_1 = require("../../../redux/slices/addTaskSlice");
var Layout_1 = require("../../layout/Layout");
var Todo_1 = require("../todo/Todo");
var Todolist_module_css_1 = require("./Todolist.module.css");
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
    // const [tasks, setTasks] = useState(tasks1)
    var tasks2 = react_redux_1.useSelector(function (state) { return state.addTask.tasks1; });
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState('all'), filter = _a[0], setFilter = _a[1];
    var addTask = function (newTitle) {
        dispatch(addTaskSlice_1.addNewTask(newTitle));
    };
    var removeTask = function (id) {
        dispatch(addTaskSlice_1.removeCurrentTask(id));
    };
    var changeFilter = function (value) {
        setFilter(value);
    };
    var changeStatus = function (id, isDone) {
        // let findTask = tasks.find(t => t.id === id)
        // if (findTask) {
        // 	findTask.isDone = isDone
        // }
        // setTasks([...tasks])
        dispatch(addTaskSlice_1.changeStatusTask({ id: id, isDone: isDone }));
    };
    // let tasksForToDoList = tasks
    // if (filter === 'completed') {
    // 	tasksForToDoList = tasks.filter(task => task.isDone === true)
    // }
    // if (filter === 'active') {
    // 	tasksForToDoList = tasks.filter(task => task.isDone === false)
    // }
    return (React.createElement(Layout_1["default"], null,
        React.createElement("div", { className: Todolist_module_css_1["default"].todolist },
            React.createElement(Todo_1["default"], { title: 'Plans for today', 
                // tasks={tasksForToDoList}
                addTask: addTask, removeTask: removeTask, changeFilter: changeFilter, changeStatus: changeStatus, filter: filter }))));
};
exports["default"] = Todolist;
