import Auth from '../screens/auth/Auth'
import Todolist from '../screens/todolist/Todolist'

export const routes = [
	{
		path: '/',
		component: Todolist,
		// isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		// isAuth: false
	},
]
