import { useDispatch } from 'react-redux'
import {
	addNewTask,
	changeStatusTask,
	removeCurrentTask,
} from '../../../redux/slices/changeTaskSlice'
import Layout from '../../layout/Layout'
import Todo from '../todo/Todo'
import styles from './Todolist.module.css'

const Todolist = () => {
	const dispatch = useDispatch()

	const addTask = (newTitle: string) => {
		dispatch(addNewTask(newTitle))
	}

	const removeTask = (id: string) => {
		dispatch(removeCurrentTask(id))
	}

	const changeStatus = (id: string, isDone: boolean) => {
		dispatch(changeStatusTask({ id, isDone }))
	}

	return (
		<Layout>
			<div className={styles.todolist}>
				<Todo
					title='Plans for today'
					addTask={addTask}
					removeTask={removeTask}
					changeStatus={changeStatus}
				/>
			</div>
		</Layout>
	)
}

export default Todolist
