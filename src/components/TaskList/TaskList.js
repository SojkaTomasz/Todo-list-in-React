import Task from "./Task/Task"
import SortTask from "./SortTask/SortTask"
import styles from "./TaskList.module.css"

const TaskList = props => {
	const active = props.tasks.filter(task => task.active)
	const done = props.tasks.filter(task => !task.active)

	if (props.sort[1].active) {
		active.sort((a, b) => a.task.localeCompare(b.task))
	}

	if (props.sort[0].active) {
		active.sort((a, b) => a.date.localeCompare(b.date))
	}

	done.sort((a, b) => b.dateDone.localeCompare(a.dateDone))

	const taskActive = active.map(task => (
		<Task
			key={task.id}
			{...task}
			doneActiveTask={props.doneActiveTask}
			delateTask={props.delateTask}
			sort={props.sort}
			showEditTask={props.showEditTask}
		/>
	))

	const taskDone = done.map(task => (
		<Task
			key={task.id}
			{...task}
			sort={props.sort}
			delateTask={props.delateTask}
			doneActiveTask={props.doneActiveTask}
		/>
	))

	const sortTask = props.sort.map(item => (
		<SortTask key={item.id} {...item} sortTask={props.sortTask} />
	))

	return (
		<>
			<div className={styles.sectionTaskActive}>
				<h2 className={styles.title}>Lista zadań</h2>
				<ul> {sortTask}</ul>
				{taskActive.length > 0 ? (
					taskActive
				) : (
					<p className={styles.info}>Nie masz żadnych zadań na liście!</p>
				)}
			</div>
			<div className={styles.sectionTaskDone}>
				<h2 className={styles.title}>
					Zadania wykonane <em>({taskDone.length}) </em>
				</h2>
				{taskDone}
			</div>
		</>
	)
}

export default TaskList
