import { useContext, useState } from "react"
import ClickButton from "../../context/ClickButton"
import styles from "./EditTask.module.css"

const EditTask = props => {
	const [task, setTask] = useState(props.task)
	const [date, setDate] = useState(props.date)
	const [important, setImportant] = useState(props.important)
	const [errorTask, setErrorTask] = useState(false)
	const [errorDate, setErrorDate] = useState(false)

	const accept = useContext(ClickButton)
	const close = useContext(ClickButton)

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
		task ? setErrorTask(false) : setErrorTask(true)
		date ? setErrorDate(false) : setErrorDate(true)
		if (task && date) {
			accept.acceptTaskChange(props.id, task, date, important)
		}
	}

	return (
		<div className={styles.sectionEditTask}>
			<div className={styles.section}>
				<h3 className={styles.title}>Edytuj task</h3>
				<input
					className={styles.text}
					name='task'
					value={task}
					onKeyDown={e => e.key === "Enter" && acceptTaskChange()}
					onChange={handleChangeInput}
					placeholder='Treść zadania...'
					type='text'
				/>
				{errorTask && <p className={styles.errorTask}>Musisz podać terść zadania</p>}
				<div className={styles.dateBox}>
					<div className={styles.dateItems}>
						<input
							className={styles.date}
							name='date'
							value={date}
							onKeyDown={e => e.key === "Enter" && acceptTaskChange()}
							onChange={handleChangeInput}
							type='date'
						/>
						{errorDate && <p className={styles.errorTask}>Musisz podać datę</p>}
					</div>
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
					<button onClick={close.closeEditTask} className={styles.btn}>
						Anuluj
					</button>
				</div>
			</div>
		</div>
	)
}

export default EditTask
