"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var TaskSlice_1 = require("../../../redux/slices/TaskSlice");
var TodoSlice_1 = require("../../../redux/slices/TodoSlice");
var Todo_module_css_1 = require("./Todo.module.css");
var Todo = function (_a) {
    var id = _a.id, title = _a.title;
    // let items =
    var items = react_redux_1.useSelector(function (state) { return state.task[id]; });
    console.log(items);
    // const items = itemList[id]
    var _b = react_1.useState(''), error = _b[0], setError = _b[1];
    var _c = react_1.useState('all'), filter = _c[0], setFilter = _c[1];
    var dispatch = react_redux_1.useDispatch();
    // if (filter === 'completed') {
    // 	tasks = [...tasks.filter(task => task.isDone === true)]
    // }
    // if (filter === 'active') {
    // 	tasks = [...tasks.filter(task => task.isDone === false)]
    // }
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
    var _d = react_1.useState(''), newTaskTitle = _d[0], setnewTaskTitle = _d[1];
    var editTaskTitleChangeHandler = function (event) {
        setnewTaskTitle(event.target.value);
    };
    var handleSubmit = function (e, id) {
        var todolistId = id;
        e.preventDefault();
        // if (newTaskTitle.trim() !== '') {
        // 	props.addTask(newTaskTitle)
        // 	setnewTaskTitle('')
        // } else {
        // 	setError('The title is required')
        // }
        dispatch(TaskSlice_1.createTask({ todolistId: todolistId, newTaskTitle: newTaskTitle }));
    };
    var onClickDel = function (id) {
        dispatch(TodoSlice_1.deleteTodo(id));
    };
    react_1.useEffect(function () {
        dispatch(TaskSlice_1.getTask(id));
    }, [dispatch]);
    return (React.createElement("div", { className: classnames_1["default"](Todo_module_css_1["default"].todo__wrapper, Todo_module_css_1["default"].todo) },
        React.createElement("button", { onClick: function () { return onClickDel(id); } }, "delete"),
        React.createElement("h3", { className: Todo_module_css_1["default"].todo__title }, title),
        React.createElement("form", { onSubmit: function (e) { return handleSubmit(e, id); }, className: Todo_module_css_1["default"].todo__new_task },
            React.createElement("input", { className: classnames_1["default"](Todo_module_css_1["default"].todo__input, { error: error }), placeholder: 'Enter a new task...', type: 'text', value: newTaskTitle, onChange: editTaskTitleChangeHandler, onKeyPress: onKeyPressHandler }),
            React.createElement("button", { className: Todo_module_css_1["default"].button__add_task }, "+"),
            error && React.createElement("div", { className: 'error-message' }, error)),
        React.createElement("ul", { className: Todo_module_css_1["default"].todo__list }, items &&
            // items.every(t => t.isDone === true && filter === 'active')) ||
            // items.every(t => t.isDone === false && filter === 'completed') ? (
            // <div>No tasks</div>
            items.map(function (task) {
                // const onChangeHandler = (
                // 	e: React.ChangeEvent<HTMLInputElement>
                // ) => {
                // 	props.changeStatus(task.id, e.target.checked)
                // }
                return (React.createElement("li", { key: task.id, className: classnames_1["default"](Todo_module_css_1["default"].todo__list_item
                    // task.isDone === true ? 'is-done' : ''
                    ) },
                    React.createElement("input", { type: 'checkbox', id: task.id }),
                    React.createElement("label", { htmlFor: task.id }, task.title),
                    React.createElement("button", { onClick: function () { } }, "-")));
            })),
        React.createElement("div", { className: Todo_module_css_1["default"].buttons },
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, filter === 'all' ? 'active-filter' : ''), onClick: onAllClickHandler }, "All"),
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, filter === 'active' ? 'active-filter' : ''), onClick: onActiveClickHandler }, "Active"),
            React.createElement("button", { className: classnames_1["default"](Todo_module_css_1["default"].buttons__status, filter === 'completed' ? 'active-filter' : ''), onClick: onCompletedClickHandler }, "Completed"))));
};
exports["default"] = Todo;
