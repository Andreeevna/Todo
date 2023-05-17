import cn from 'classnames'
import { KeyboardEvent, useState } from 'react'

import styles from './Todo.module.css'

import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import {
	FilterValuesType,
	PropsTodoType,
	TasksType,
} from '../../../types/types'

const Todo: React.FC<PropsTodoType> = props => {
	let tasks = useSelector((state: RootState) => state.addTask.tasks1)
	const [error, setError] = useState('')

	const [filter, setFilter] = useState<FilterValuesType>('all')

	if (filter === 'completed') {
		tasks = [...tasks.filter(task => task.isDone === true)]
	}

	if (filter === 'active') {
		tasks = [...tasks.filter(task => task.isDone === false)]
	}

	const changeFilter = (value: FilterValuesType) => {
		setFilter(value)
	}

	const onAllClickHandler = () => {
		changeFilter('all')
	}

	const onActiveClickHandler = () => {
		changeFilter('active')
	}

	const onCompletedClickHandler = () => {
		changeFilter('completed')
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError('')
	}
	const [newTaskTitle, setnewTaskTitle] = useState('')

	const editTaskTitleChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setnewTaskTitle(event.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (newTaskTitle.trim() !== '') {
			props.addTask(newTaskTitle)
			setnewTaskTitle('')
		} else {
			setError('The title is required')
		}
	}

	return (
		<div className={cn(styles.todo__wrapper, styles.todo)}>
			<h3 className={styles.todo__title}>{props.title}</h3>
			<form onSubmit={handleSubmit} className={styles.todo__new_task}>
				<input
					className={cn(styles.todo__input, { error: error })}
					placeholder='Enter a new task...'
					type='text'
					value={newTaskTitle}
					onChange={editTaskTitleChangeHandler}
					onKeyPress={onKeyPressHandler}
				/>
				<button className={styles.button__add_task}>+</button>
				{error && <div className='error-message'>{error}</div>}
			</form>
			<ul className={styles.todo__list}>
				{(tasks &&
					tasks.every(t => t.isDone === true && filter === 'active')) ||
				tasks.every(t => t.isDone === false && filter === 'completed') ? (
					<div>No tasks</div>
				) : (
					tasks.map((task: TasksType) => {
						const onChangeHandler = (
							e: React.ChangeEvent<HTMLInputElement>
						) => {
							props.changeStatus(task.id, e.target.checked)
						}

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
									onChange={onChangeHandler}
								/>
								<label htmlFor={task.id}>{task.title}</label>
								<button onClick={() => props.removeTask(task.id)}>-</button>
							</li>
						)
					})
				)}
			</ul>
			<div className={styles.buttons}>
				<button
					className={cn(
						styles.buttons__status,
						filter === 'all' ? 'active-filter' : ''
					)}
					onClick={onAllClickHandler}
				>
					All
				</button>
				<button
					className={cn(
						styles.buttons__status,
						filter === 'active' ? 'active-filter' : ''
					)}
					onClick={onActiveClickHandler}
				>
					Active
				</button>
				<button
					className={cn(
						styles.buttons__status,
						filter === 'completed' ? 'active-filter' : ''
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
