import styles from "./EditTask.module.css"
import {useState} from "react"

const EditTask = props => {
	const [task, setTask] = useState(props.task)
	const [date, setDate] = useState(props.date)
	const [important, setImportant] = useState(props.important)

	const handleChangeInput = e => {
		if (e.target.name === "important") {
			setImportant(!important)
		} else if (e.target.name === "task") {
			setTask(e.target.value)
		} else if (e.target.name === "date") {
			setDate(e.target.value)
		}
	}

	const acceptTaskChange = () => {
		props.acceptTaskChange(props.id, task, date, important)
	}

	return (
		<div className={styles.sectionEditTask}>
			<div className={styles.section}>
				<h3 className={styles.title}>Edytuj task</h3>
				<input
					className={styles.text}
					name='task'
					value={task}
					onChange={handleChangeInput}
					type='text'
				/>
				<div className={styles.dateItems}>
					<input
						className={styles.date}
						name='date'
						value={date}
						onChange={handleChangeInput}
						type='date'
					/>
					<div className={styles.checkbox}>
						<label htmlFor='checkboxEdit'>Priorytet</label>
						<input
							className={styles.important}
							name='important'
							value={important}
							onChange={handleChangeInput}
							type='checkbox'
							id='checkboxEdit'
							checked={important}
						/>
					</div>
				</div>
				<div className={styles.btnSection}>
					<button onClick={acceptTaskChange} className={styles.btn}>
						Zatwierdź
					</button>
					<button onClick={props.closeEditTask} className={styles.btn}>
						Anuluj
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditTask
