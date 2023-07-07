import {useState} from "react"
import styles from "./AddTask.module.css"

const AddTask = props => {
	const [id, setId] = useState(0)
	const [task, setTask] = useState("")
	const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
	const [important, setImportant] = useState(false)
	const [errorTask, setErrorTask] = useState(false)
	const [errorDate, setErrorDate] = useState(false)

	const handleChangeInput = e => {
		const name = e.target.name
		if (name === "task") {
			setTask(e.target.value)
		} else if (name === "date") {
			setDate(e.target.value)
		} else if (name === "important") {
			setImportant(!important)
		}
	}

	const addTask = () => {
		task ? setErrorTask(false) : setErrorTask(true)
		date ? setErrorDate(false) : setErrorDate(true)
		if (task && date) {
			setId(id + 1)
			props.addTask(id, task, date, important)
			setTask("")
			setDate(new Date().toJSON().slice(0, 10))
			setImportant(false)
		}
	}

	let maxDate = new Date().toJSON().slice(0, 4) * 1 + 2
	maxDate = maxDate + new Date().toJSON().slice(4, 10)

	return (
		<div className={styles.sectionAddTask}>
			<h1>ToDoApp</h1>
			<div className={styles.sectionItems}>
				<label className={styles.title} htmlFor='task'>
					Treść zadania
				</label>
				<input
					className={styles.task}
					name='task'
					value={task}
					onKeyDown={e => e.key === "Enter" && addTask()}
					onChange={handleChangeInput}
					placeholder='Dodaj zadanie...'
					type='text'
					id='task'
				/>
				{errorTask && <p className={styles.errorTask}>Musisz podać terść zadania</p>}
			</div>
			<div className={styles.sectionSelect}>
				<div className={styles.sectionItems}>
					<label className={styles.title} htmlFor='date'>
						Do kiedy wykonać
					</label>
					<input
						className={styles.date}
						name='date'
						min={date}
						max={maxDate}
						value={date}
						onChange={handleChangeInput}
						type='date'
						id='date'
					/>
					{errorDate && <p className={styles.errorTask}>Musisz podać datę</p>}
				</div>

				<div className={`${styles.sectionItems} ${styles.sectionImportant}`}>
					<label>Priorytet</label>
					<input
						name='important'
						value={important}
						onChange={handleChangeInput}
						type='checkbox'
						checked={important}
					/>
				</div>
			</div>
			<button onClick={addTask} className={styles.btn}>
				Dodaj Zadanie
			</button>
		</div>
	)
}

export default AddTask
