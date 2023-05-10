export type TasksTpe = {
	id: number
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TasksTpe>
	removeTask: (id: number) => void
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
				{props.tasks &&
					props.tasks.map(task => {
						return (
							<li key={task.id}>
								<input type='checkbox' />
								<span>{task.title}</span>
								<button onClick={() => props.removeTask(task.id)}>-</button>
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
