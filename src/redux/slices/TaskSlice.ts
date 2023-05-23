import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../api/api'

export type TaskType = {
	description: string
	title: string
	completed: boolean
	status: number
	priority: number
	startDate: string
	deadline: string
	id: string
	todoListId: string
	order: number
	addedDate: number
}

export type ParamsType = {
	todolistId: string
	newTaskTitle: string
}

export type ThunkAPI = {
	dispatch: Function
	getState: Function
	extra?: any
	requestId: string
	signal: AbortSignal
}

type ObjType = {
	[key: string]: Array<TaskType>
}

const initialState: ObjType = {}

export const getTask = createAsyncThunk(
	'task/getTask',
	async (todolistId: string) => {
		const { data } = await instance.get(`/todo-lists/${todolistId}/tasks`)
		return data.items
	}
)

export const createTask = createAsyncThunk(
	'task/createTask',
	async (params: ParamsType) => {
		const { todolistId, newTaskTitle } = params
		const { data } = await instance.post(`/todo-lists/${todolistId}/tasks`, {
			title: newTaskTitle,
		})
		return data.data.item
	}
)

export const TaskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getTask.fulfilled, (state, action) => {
			console.log(action)
			state[action.payload[0].todoListId] = action.payload
			// state.items = action.payload
		})
		builder.addCase(createTask.fulfilled, (state, action) => {
			// console.log(action.payload)
			console.log(action)
			state[action.payload.todoListId] = [
				action.payload,
				...state[action.payload.todoListId],
			]
		})
	},
})

export const {} = TaskSlice.actions

export default TaskSlice.reducer
