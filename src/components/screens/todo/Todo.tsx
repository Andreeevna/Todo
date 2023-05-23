import cn from 'classnames'
import { KeyboardEvent, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { TaskType, createTask, getTask } from '../../../redux/slices/TaskSlice'
import { deleteTodo } from '../../../redux/slices/TodoSlice'
import { AppDispatch, RootState } from '../../../redux/store'
import { FilterValuesType } from '../../../types/types'

import styles from './Todo.module.css'

export type TodoPropsType = {
	id: string
	title: string
}

const Todo: React.FC<TodoPropsType> = ({ id, title }) => {
	// let items =
	const items = useSelector((state: RootState) => state.task[id])
	console.log(items)
	// const items = itemList[id]
	const [error, setError] = useState('')

	const [filter, setFilter] = useState<FilterValuesType>('all')
	const dispatch = useDispatch<AppDispatch>()

	// if (filter === 'completed') {
	// 	tasks = [...tasks.filter(task => task.isDone === true)]
	// }

	// if (filter === 'active') {
	// 	tasks = [...tasks.filter(task => task.isDone === false)]
	// }

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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
		let todolistId = id
		e.preventDefault()
		// if (newTaskTitle.trim() !== '') {
		// 	props.addTask(newTaskTitle)
		// 	setnewTaskTitle('')
		// } else {
		// 	setError('The title is required')
		// }
		dispatch(createTask({ todolistId, newTaskTitle }))
	}

	const onClickDel = (id: string) => {
		dispatch(deleteTodo(id))
	}
	useEffect(() => {
		dispatch(getTask(id))
	}, [dispatch])

	return (
		<div className={cn(styles.todo__wrapper, styles.todo)}>
			<button onClick={() => onClickDel(id)}>delete</button>
			<h3 className={styles.todo__title}>{title}</h3>
			<form
				onSubmit={e => handleSubmit(e, id)}
				className={styles.todo__new_task}
			>
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
				{items &&
					// items.every(t => t.isDone === true && filter === 'active')) ||
					// items.every(t => t.isDone === false && filter === 'completed') ? (
					// <div>No tasks</div>

					items.map((task: TaskType) => {
						// const onChangeHandler = (
						// 	e: React.ChangeEvent<HTMLInputElement>
						// ) => {
						// 	props.changeStatus(task.id, e.target.checked)
						// }
						return (
							<li
								key={task.id}
								className={cn(
									styles.todo__list_item
									// task.isDone === true ? 'is-done' : ''
								)}
							>
								<input
									type='checkbox'
									id={task.id}
									// checked={task.isDone}
									// onChange={onChangeHandler}
								/>
								<label htmlFor={task.id}>{task.title}</label>
								<button onClick={() => {}}>-</button>
							</li>
						)
					})}
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
