import { ChangeEvent, useState } from 'react'
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
	changeStatus: (id: string, isDone: boolean) => void
}

const Todo: React.FC<PropsType> = props => {
	const [newTaskTitle, setnewTaskTitle] = useState('')

	const editTaskTitleChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setnewTaskTitle(event.target.value)
	}

	const addNewTask = () => {
		props.addTask(newTaskTitle)
		setnewTaskTitle('')
	}

	const onAllClickHandler = () => {
		props.changeFilter('all')
	}

	const onActiveClickHandler = () => {
		props.changeFilter('active')
	}

	const onCompletedClickHandler = () => {
		props.changeFilter('completed')
	}

	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input value={newTaskTitle} onChange={editTaskTitleChangeHandler} />
				<button onClick={addNewTask}>+</button>
			</div>
			<ul>
				{props.tasks &&
					props.tasks.map(task => {
						const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
							props.changeStatus(task.id, e.target.checked)
						}
						return (
							<li key={task.id}>
								<input
									type='checkbox'
									checked={task.isDone}
									onChange={onChangeHandler}
								/>
								<span>{task.title}</span>
								<button onClick={() => props.removeTask(task.id)}>-</button>
							</li>
						)
					})}
			</ul>
			<div>
				<button onClick={onAllClickHandler}>All</button>
				<button onClick={onActiveClickHandler}>Active</button>
				<button onClick={onCompletedClickHandler}>Completed</button>
			</div>
		</div>
	)
}

export default Todo
