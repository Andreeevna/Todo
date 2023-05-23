import cn from 'classnames'
import { KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, fetchTodo } from '../../../redux/slices/TodoSlice'
import { AppDispatch, RootState } from '../../../redux/store'
import Layout from '../../layout/Layout'
import Todo from '../todo/Todo'
import s from './../todo/Todo.module.css'
import styles from './Todolist.module.css'

const Todolist: React.FC = () => {
	const items = useSelector((state: RootState) => state.todo.items)
	const [error, setError] = useState('')
	const [newTaskTitle, setnewTaskTitle] = useState('')

	const dispatch = useDispatch<AppDispatch>()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (newTaskTitle.trim() !== '') {
			dispatch(createTodo(newTaskTitle))
			setnewTaskTitle('')
		} else {
			setError('The title is required')
		}
	}

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setnewTaskTitle(event.target.value)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError('')
	}

	// const addTask = (newTitle: string) => {
	// 	dispatch(addNewTask(newTitle))
	// }

	// const removeTask = (id: string) => {
	// 	dispatch(removeCurrentTask(id))
	// }

	// const changeStatus = (id: string, isDone: boolean) => {
	// 	dispatch(changeStatusTask({ id, isDone }))
	// }

	useEffect(() => {
		dispatch(fetchTodo())
	}, [dispatch])

	return (
		<Layout>
			<form onSubmit={handleSubmit} className={s.todo__new_task}>
				<input
					className={cn(s.todo__input, { error: error })}
					placeholder='Enter a new task...'
					type='text'
					value={newTaskTitle}
					onChange={onChangeInput}
					onKeyPress={onKeyPressHandler}
				/>
				<button className={s.button__add_task}>+</button>
				{error && <div className='error-message'>{error}</div>}
			</form>
			<div className={styles.todolist}>
				{items &&
					items.map(item => {
						return (
							<Todo
								key={item.id}
								id={item.id}
								title={item.title}
								// addTask={addTask}
								// removeTask={removeTask}
								// changeStatus={changeStatus}
							/>
						)
					})}
			</div>
		</Layout>
	)
}

export default Todolist
