import SortTaskImportant from "./SortTaskImportant/SortTaskImportant"
import Task from "./Task/Task"
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
		<Task key={task.id} sort={props.sort} {...task} />
	))

	const taskDone = done.map(task => (
		<Task key={task.id} sort={props.sort} {...task} />
	))

	const sortTaskImportant = props.sort.map(item => (
		<SortTaskImportant key={item.id} {...item} />
	))

	return (
		<>
			<div className={styles.sectionTaskActive}>
				<h2 className={styles.title}>
					Lista zadań <em>({taskActive.length}) </em>
				</h2>
				<ul> {sortTaskImportant}</ul>
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
