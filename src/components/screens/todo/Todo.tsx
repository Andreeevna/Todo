import cn from 'classnames'
import { KeyboardEvent, useState } from 'react'

import styles from './Todo.module.css'

import { useSelector } from 'react-redux'
import { FilterValuesType } from '../todolist/Todolist'

export type TasksType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	// tasks: Array<TasksType>
	addTask: (newTitle: string) => void
	// removeTask: (id: string) => void
	changeFilter: (value: FilterValuesType) => void
	// changeStatus: (id: string, isDone: boolean) => void
	filter: FilterValuesType
}

const Todo: React.FC<PropsType> = props => {
	const tasks = useSelector((state: any) => state.addTask.tasks1)
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
		<div className={cn(styles.todo__wrapper, styles.todo)}>
			<h3 className={styles.todo__title}>{props.title}</h3>
			<div className={styles.todo__new_task}>
				<input
					className={cn(styles.todo__input, { error: error })}
					placeholder='Enter a new task...'
					type='text'
					value={newTaskTitle}
					onChange={editTaskTitleChangeHandler}
					onKeyPress={onKeyPressHandler}
				/>
				<button className={styles.button__add_task} onClick={addNewTask}>
					+
				</button>
				{error && <div className='error-message'>{error}</div>}
			</div>
			<ul className={styles.todo__list}>
				{tasks &&
					tasks.map((task: any) => {
						// const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
						// 	// props.changeStatus(task.id, e.target.checked)
						// }

						return (
							<li
								key={task.id}
								className={cn(
									styles.todo__list_item,
									task.isDone === true ? 'is-done' : ''
								)}
							>
								<input
									type='checkbox'
									id={task.id}
									checked={task.isDone}
									// onChange={onChangeHandler}
								/>
								<label htmlFor={task.id}>{task.title}</label>
								{/* <button onClick={() => props.removeTask(task.id)}>-</button> */}
							</li>
						)
					})}
			</ul>
			<div className={styles.buttons}>
				<button
					className={cn(
						styles.buttons__status,
						props.filter === 'all' ? 'active-filter' : ''
					)}
					onClick={onAllClickHandler}
				>
					All
				</button>
				<button
					className={cn(
						styles.buttons__status,
						props.filter === 'active' ? 'active-filter' : ''
					)}
					onClick={onActiveClickHandler}
				>
					Active
				</button>
				<button
					className={cn(
						styles.buttons__status,
						props.filter === 'completed' ? 'active-filter' : ''
					)}
					onClick={onCompletedClickHandler}
				>
					Completed
				</button>
			</div>
		</div>
	)
}

export default Todo
