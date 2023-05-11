import { useState } from 'react'
import { v1 } from 'uuid'
import './App.css'
import Todo, { TasksType } from './Todo'

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
	let tasks1: Array<TasksType> = [
		{
			id: v1(),
			title: 'workout',
			isDone: true,
		},
		{
			id: v1(),
			title: 'grocery shopping',
			isDone: false,
		},
		{
			id: v1(),
			title: 'meeting with friends',
			isDone: true,
		},
		{
			id: v1(),
			title: 'meeting with friends',
			isDone: false,
		},
	]

	const [tasks, setTasks] = useState(tasks1)
	const [filter, setFilter] = useState<FilterValuesType>('active')

	const addTask = (newTitle: string) => {
		let newTask = {
			id: v1(),
			title: newTitle,
			isDone: false,
		}
		let newTasks = [newTask, ...tasks]
		setTasks(newTasks)
	}

	const removeTask = (id: string) => {
		let filtereTasks = tasks.filter(task => task.id !== id)
		setTasks(filtereTasks)
	}

	const changeFilter = (value: FilterValuesType) => {
		setFilter(value)
	}

	const changeStatus = (id: string, isDone: boolean) => {
		let findTask = tasks.find(t => t.id === id)

		if (findTask) {
			findTask.isDone = isDone
		}

		setTasks([...tasks])
	}

	let tasksForToDoList = tasks

	if (filter === 'completed') {
		tasksForToDoList = tasks.filter(task => task.isDone === true)
	}

	if (filter === 'active') {
		tasksForToDoList = tasks.filter(task => task.isDone === false)
	}

	return (
		<div className='App'>
			<Todo
				title='Plans for today'
				tasks={tasksForToDoList}
				addTask={addTask}
				removeTask={removeTask}
				changeFilter={changeFilter}
				changeStatus={changeStatus}
				filter={filter}
			/>
		</div>
	)
}

export default App
