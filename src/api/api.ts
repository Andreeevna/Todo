import axios from 'axios'

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	headers: {
		'API-KEY': '8686a600-1432-4fe7-a787-e5f10049effb',
	},
})

export type TodoType = {
	id: string
	addedDate: string
	title: string
	order: number
}
