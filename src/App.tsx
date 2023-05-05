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
	]

	let tasks2: Array<TasksTpe> = [
		{
			id: 1,
			title: 'avocado',
			isDone: true,
		},
		{
			id: 2,
			title: 'oil',
			isDone: false,
		},
		{
			id: 3,
			title: 'berries and fruits',
			isDone: true,
		},
	]
	return (
		<div className='App'>
			<Todo title='Plans for today' tasks={tasks1} />
			<Todo title='Shopping list' tasks={tasks2} />
		</div>
	)
}

export default App
