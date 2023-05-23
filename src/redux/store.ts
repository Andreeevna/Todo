import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import task from './slices/TaskSlice'
import todo from './slices/TodoSlice'

export const store = configureStore({
	reducer: {
		todo,
		task,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
