import { useState } from 'react'
import { v1 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import {
	addNewTask,
	changeStatusTask,
	removeCurrentTask,
} from '../../../redux/slices/addTaskSlice'
import Layout from '../../layout/Layout'
import Todo, { TasksType } from '../todo/Todo'
import styles from './Todolist.module.css'

export type FilterValuesType = 'all' | 'completed' | 'active'

const Todolist = () => {
	let tasks1: Array<TasksType> = [
		{
			id: v1(),
			title: 'workout',
			isDone: true,
		},
		{
			id: v1(),
			title: 'grocery shopping',
			isDone: false,
		},
		{
			id: v1(),
			title: 'meeting with friends',
			isDone: true,
		},
		{
			id: v1(),
			title: 'meeting with friends',
			isDone: false,
		},
	]

	// const [tasks, setTasks] = useState(tasks1)

	const tasks2 = useSelector((state: any) => state.addTask.tasks1)
	const dispatch = useDispatch()

	const [filter, setFilter] = useState<FilterValuesType>('all')

	const addTask = (newTitle: string) => {
		dispatch(addNewTask(newTitle))
	}

	const removeTask = (id: string) => {
		dispatch(removeCurrentTask(id))
	}

	const changeFilter = (value: FilterValuesType) => {
		setFilter(value)
	}

	const changeStatus = (id: string, isDone: boolean) => {
		// let findTask = tasks.find(t => t.id === id)

		// if (findTask) {
		// 	findTask.isDone = isDone
		// }

		// setTasks([...tasks])
		dispatch(changeStatusTask({ id, isDone }))
	}

	// let tasksForToDoList = tasks

	// if (filter === 'completed') {
	// 	tasksForToDoList = tasks.filter(task => task.isDone === true)
	// }

	// if (filter === 'active') {
	// 	tasksForToDoList = tasks.filter(task => task.isDone === false)
	// }

	return (
		<Layout>
			<div className={styles.todolist}>
				<Todo
					title='Plans for today'
					// tasks={tasksForToDoList}
					addTask={addTask}
					removeTask={removeTask}
					changeFilter={changeFilter}
					changeStatus={changeStatus}
					filter={filter}
				/>
			</div>
		</Layout>
	)
}

export default Todolist
