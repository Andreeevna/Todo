import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v1 } from 'uuid'

export type TasksType = {
	id: string
	title: string
	isDone: boolean
}

type TaskTitleType = {
	title: string
}

const initialState = {
	tasks1: [
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
	] as Array<TasksType>,
}

export const addTaskSlice = createSlice({
	name: 'addTask',
	initialState,
	reducers: {
		addNewTask(state, action: PayloadAction<any>) {
			let newTask = {
				id: v1(),
				title: action.payload,
				isDone: false,
			}
			state.tasks1 = [newTask, ...state.tasks1]
		},
		removeCurrentTask(state, action: PayloadAction<string>) {
			state.tasks1 = state.tasks1.filter(task => task.id !== action.payload)
		},
	},
})

export const { addNewTask, removeCurrentTask } = addTaskSlice.actions

export default addTaskSlice.reducer
