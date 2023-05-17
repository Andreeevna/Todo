export type TasksType = {
	id: string
	title: string
	isDone: boolean
}
export type FilterValuesType = 'all' | 'completed' | 'active'

export type PropsTodoType = {
	title: string
	addTask: (newTitle: string) => void
	removeTask: (id: string) => void
	changeStatus: (id: string, isDone: boolean) => void
}

export type ChangeStatusType = {
	id: string
	isDone: boolean
}
