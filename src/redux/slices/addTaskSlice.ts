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
	},
})

export const { addNewTask } = addTaskSlice.actions

export default addTaskSlice.reducer
