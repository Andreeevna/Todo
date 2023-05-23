import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { instance } from '../../api/api'

export type TodoType = {
	id: string
	title: string
	addedDate: string
	order: number
}

export type ThunkAPI = {
	dispatch: Function
	getState: Function
	extra?: any
	requestId: string
	signal: AbortSignal
}

const initialState = {
	items: [] as Array<TodoType>,
}

export const fetchTodo = createAsyncThunk('todo/fetchTodo', async () => {
	const { data } = await instance.get(`/todo-lists`)
	return data
})

export const createTodo = createAsyncThunk(
	'todo/createTodo',
	async (title: string, thunkAPI: ThunkAPI) => {
		const { data } = await instance.post(`/todo-lists`, { title: title })

		return data.data.item
	}
)

export const deleteTodo = createAsyncThunk(
	'todo/deleteTodo',
	async (todolistId: string, thunkAPI: ThunkAPI) => {
		const { data } = await instance.delete(`/todo-lists/${todolistId}`)
		return todolistId
	}
)

export const TodoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchTodo.pending, state => {
			console.log('fetching data...')
		})
		builder.addCase(fetchTodo.fulfilled, (state, action) => {
			state.items = action.payload
		})
		builder.addCase(createTodo.fulfilled, (state, action) => {
			state.items = [action.payload, ...state.items]
		})
		builder.addCase(deleteTodo.fulfilled, (state, action) => {
			state.items = state.items.filter(task => {
				return task.id !== action.payload
			})
		})
	},
})

// 		changeStatusTask(state, action: PayloadAction<ChangeStatusType>) {
// 			let findTask = state.tasks1.find(t => t.id === action.payload.id)
// 			if (findTask) {
// 				findTask.isDone = action.payload.isDone
// 			}

// 			state.tasks1 = [...state.tasks1]

export const {} = TodoSlice.actions

export default TodoSlice.reducer
