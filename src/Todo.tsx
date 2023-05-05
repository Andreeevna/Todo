export type TasksTpe = {
	id: number
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TasksTpe>
}

const Todo = (props: PropsType) => {
	return (
		<div>
			<h3>{props.title}</h3>

			<div>
				<input />
				<button>+</button>
			</div>
			<ul>
				{props.tasks.map(param => {
					return (
						<li key={param.id}>
							<input type='checkbox' />
							<span>{param.title}</span>
						</li>
					)
				})}
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	)
}

export default Todo
