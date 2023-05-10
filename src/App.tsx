import { useState } from 'react'
import './App.css'
import Todo, { TasksTpe } from './Todo'

function App() {
	let tasks1: Array<TasksTpe> = [
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
			isDone: true,
		},
	]

	const [tasks, setTasks] = useState(tasks1)

	const removeTask = (id: number) => {
		let filtereTasks = tasks.filter(task => task.id !== id)
		setTasks(filtereTasks)
	}

	return (
		<div className='App'>
			<Todo title='Plans for today' tasks={tasks} removeTask={removeTask} />
		</div>
	)
}

export default App
