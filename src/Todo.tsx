import { useState } from 'react'
import { FilterValuesType } from './App'

export type TasksType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TasksType>
	addTask: (newTitle: string) => void
	removeTask: (id: string) => void
	changeFilter: (value: FilterValuesType) => void
}

const Todo: React.FC<PropsType> = props => {
	const [newTaskTitle, setnewTaskTitle] = useState('')

	const editTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setnewTaskTitle(event.target.value)
	}
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input value={newTaskTitle} onChange={editTaskTitle} />
				<button onClick={() => props.addTask(newTaskTitle)}>+</button>
			</div>
			<ul>
				{props.tasks &&
					props.tasks.map(task => {
						return (
							<li key={task.id}>
								<input
									type='checkbox'
									checked={task.isDone}
									onChange={() => {}}
								/>
								<span>{task.title}</span>
								<button onClick={() => props.removeTask(task.id)}>-</button>
							</li>
						)
					})}
			</ul>
			<div>
				<button onClick={() => props.changeFilter('all')}>All</button>
				<button onClick={() => props.changeFilter('active')}>Active</button>
				<button onClick={() => props.changeFilter('completed')}>
					Completed
				</button>
			</div>
		</div>
	)
}

export default Todo
