import { Component } from "react"
import ClickButton from "../context/ClickButton"
import AddTask from "./AddTask/AddTask"
import TaskList from "./TaskList/TaskList"
import EditTask from "./EditTask/EditTask"

class App extends Component {
	state = {
		tasks: [],
		ShowEditTask: false,
		editTask: [],
		sort: [
			{ id: 0, text: "Po dacie", active: true },
			{ id: 1, text: "Alfabetycznie", active: false },
			{ id: 2, text: "Priorytet", active: false },
		],
	}

	addTask = (id, task, date, important) => {
		const newTask = {
			id,
			task,
			date,
			dateDone: null,
			important,
			active: true,
			animationDeletion: false,
		}
		this.setState(prevState => {
			return { tasks: prevState.tasks.concat(newTask) }
		})
	}

	doneActiveTask = id => {
		let tasks = [...this.state.tasks]
		tasks = tasks.map(task => {
			if (task.id === id) {
				task.active = !task.active
				const date = new Date().toJSON()
				task.dateDone = date
			}
			return task
		})
		this.setState({ tasks })
	}

	delateTask = id => {
		let tasksNew = [...this.state.tasks]
		tasksNew = tasksNew.map(task => {
			if (task.id === id) {
				task.animationDeletion = true
			}
			return task
		})
		this.setState({ tasks: tasksNew })
		const tasks = tasksNew.filter(task => task.id !== id)
		setTimeout(() => {
			this.setState({ tasks })
		}, 380)
	}

	showEditTask = id => {
		this.setState({ ShowEditTask: !this.state.ShowEditTask })
		const tasksNew = [...this.state.tasks]
		const editTask = tasksNew.filter(task => task.id === id)
		this.setState({ editTask })
	}

	closeEditTask = () => {
		this.setState({ ShowEditTask: !this.state.ShowEditTask })
	}

	acceptTaskChange = (idEdit, taskEdit, dateEdit, importantEdit) => {
		let tasks = [...this.state.tasks]
		tasks = tasks.map(task => {
			if (task.id === idEdit) {
				task.task = taskEdit
				task.date = dateEdit
				task.important = importantEdit
			}
			return task
		})
		this.setState({ tasks })
		this.setState({ ShowEditTask: !this.state.ShowEditTask })
	}

	sortTaskImportant = id => {
		let sort = [...this.state.sort]
		sort = sort.map(task => {
			if (task.id === id) {
				task.active = true
			} else {
				task.active = false
			}
			return task
		})
		this.setState({ sort })
	}

	render() {
		const { tasks, editTask, ShowEditTask, sort } = this.state

		const editedTask = editTask.map(task => <EditTask key={task.id} {...task} />)

		return (
			<ClickButton.Provider
				value={{
					done: id => this.doneActiveTask(id),
					edit: id => this.showEditTask(id),
					delate: id => this.delateTask(id),
					sortTaskImportant: id => this.sortTaskImportant(id),
					acceptTaskChange: (id, task, date, important) =>
						this.acceptTaskChange(id, task, date, important),
					closeEditTask: id => this.closeEditTask(id),
				}}
			>
				<AddTask addTask={this.addTask} />
				<TaskList sort={sort} tasks={tasks} />
				{ShowEditTask && editedTask}
			</ClickButton.Provider>
		)
	}
}

export default App
