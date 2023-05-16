import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import addTask from './slices/changeTaskSlice'

export const store = configureStore({
	reducer: {
		addTask,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
