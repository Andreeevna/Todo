"use strict";
exports.__esModule = true;
var classnames_1 = require("classnames");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var TodoSlice_1 = require("../../../redux/slices/TodoSlice");
var Layout_1 = require("../../layout/Layout");
var Todo_1 = require("../todo/Todo");
var Todo_module_css_1 = require("./../todo/Todo.module.css");
var Todolist_module_css_1 = require("./Todolist.module.css");
var Todolist = function () {
    var items = react_redux_1.useSelector(function (state) { return state.todo.items; });
    var _a = react_1.useState(''), error = _a[0], setError = _a[1];
    var _b = react_1.useState(''), newTaskTitle = _b[0], setnewTaskTitle = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var handleSubmit = function (e) {
        e.preventDefault();
        if (newTaskTitle.trim() !== '') {
            dispatch(TodoSlice_1.createTodo(newTaskTitle));
            setnewTaskTitle('');
        }
        else {
            setError('The title is required');
        }
    };
    var onChangeInput = function (event) {
        setnewTaskTitle(event.target.value);
    };
    var onKeyPressHandler = function (e) {
        setError('');
    };
    // const addTask = (newTitle: string) => {
    // 	dispatch(addNewTask(newTitle))
    // }
    // const removeTask = (id: string) => {
    // 	dispatch(removeCurrentTask(id))
    // }
    // const changeStatus = (id: string, isDone: boolean) => {
    // 	dispatch(changeStatusTask({ id, isDone }))
    // }
    react_1.useEffect(function () {
        dispatch(TodoSlice_1.fetchTodo());
    }, [dispatch]);
    return (React.createElement(Layout_1["default"], null,
        React.createElement("form", { onSubmit: handleSubmit, className: Todo_module_css_1["default"].todo__new_task },
            React.createElement("input", { className: classnames_1["default"](Todo_module_css_1["default"].todo__input, { error: error }), placeholder: 'Enter a new task...', type: 'text', value: newTaskTitle, onChange: onChangeInput, onKeyPress: onKeyPressHandler }),
            React.createElement("button", { className: Todo_module_css_1["default"].button__add_task }, "+"),
            error && React.createElement("div", { className: 'error-message' }, error)),
        React.createElement("div", { className: Todolist_module_css_1["default"].todolist }, items &&
            items.map(function (item) {
                return (React.createElement(Todo_1["default"], { key: item.id, id: item.id, title: item.title }));
            }))));
};
exports["default"] = Todolist;
