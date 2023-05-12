import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FilterValuesType } from '../todolist/Todolist'

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
	filter: FilterValuesType
}

const Todo: React.FC<PropsType> = props => {
	const [newTaskTitle, setnewTaskTitle] = useState('')
	const [error, setError] = useState('')

	const editTaskTitleChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setnewTaskTitle(event.target.value)
	}

	const addNewTask = () => {
		if (newTaskTitle.trim() !== '') {
			props.addTask(newTaskTitle)
			setnewTaskTitle('')
		} else {
			setError('The title is required')
		}
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

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError('')
	}
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input
					value={newTaskTitle}
					onChange={editTaskTitleChangeHandler}
					onKeyPress={onKeyPressHandler}
					className={error ? 'error' : ''}
				/>
				<button onClick={addNewTask}>+</button>
				{error && <div className='error-message'>{error}</div>}
			</div>
			<ul>
				{props.tasks &&
					props.tasks.map(task => {
						const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
							props.changeStatus(task.id, e.target.checked)
						}
						return (
							<li
								key={task.id}
								className={task.isDone === true ? 'is-done' : ''}
							>
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
				<button
					className={props.filter === 'all' ? 'active-filter' : ''}
					onClick={onAllClickHandler}
				>
					All
				</button>
				<button
					className={props.filter === 'active' ? 'active-filter' : ''}
					onClick={onActiveClickHandler}
				>
					Active
				</button>
				<button
					className={props.filter === 'completed' ? 'active-filter' : ''}
					onClick={onCompletedClickHandler}
				>
					Completed
				</button>
			</div>
		</div>
	)
}

export default Todo
