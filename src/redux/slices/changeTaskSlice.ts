import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v1 } from 'uuid'

export type TasksType = {
	id: string
	title: string
	isDone: boolean
}

type ChangeStatusType = {
	id: string
	isDone: boolean
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

export const changeTaskSlice = createSlice({
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
		changeStatusTask(state, action: PayloadAction<ChangeStatusType>) {
			let findTask = state.tasks1.find(t => t.id === action.payload.id)
			if (findTask) {
				findTask.isDone = action.payload.isDone
			}

			state.tasks1 = [...state.tasks1]
		},
	},
})

export const { addNewTask, removeCurrentTask, changeStatusTask } =
	changeTaskSlice.actions

export default changeTaskSlice.reducer
