import { useState } from 'react'
import './App.css'
import Todo, { TasksType } from './Todo'

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
	let tasks1: Array<TasksType> = [
		{
			id: 1,
			title: 'workout',
			isDone: true,
		},
		{
			id: 2,
			title: 'grocery shopping',
			isDone: false,
		},
		{
			id: 3,
			title: 'meeting with friends',
			isDone: true,
		},
		{
			id: 4,
			title: 'meeting with friends',
			isDone: false,
		},
	]

	const [tasks, setTasks] = useState(tasks1)
	const [filter, setFilter] = useState<FilterValuesType>('active')

	const removeTask = (id: number) => {
		let filtereTasks = tasks.filter(task => task.id !== id)
		setTasks(filtereTasks)
	}

	const changeFilter = (value: FilterValuesType) => {
		setFilter(value)
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
				removeTask={removeTask}
				changeFilter={changeFilter}
			/>
		</div>
	)
}

export default App
