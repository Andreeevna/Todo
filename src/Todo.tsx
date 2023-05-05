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
				<li>
					<input type='checkbox' />
					<span>CSS</span>
				</li>
				<li>
					<input type='checkbox' />
					<span>CSS</span>
				</li>
				<li>
					<input type='checkbox' />
					<span>CSS</span>
				</li>
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
