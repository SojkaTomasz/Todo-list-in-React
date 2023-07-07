import styles from "./Task.module.css"

const Task = props => {
	const {
		id,
		task,
		date,
		dateDone,
		delateTask,
		showEditTask,
		doneActiveTask,
		important,
		active,
	} = props

	const iconImportant = important ? (
		<i
			style={{color: "tomato"}}
			className={`${styles.animationIcon} fa-solid fa-star`}
		></i>
	) : null

	const showOnlyImportant =
		props.sort[2].active && !important ? {display: "none"} : {display: "flex"}

	const animationOut = props.animationOut ? styles.animationOut : {}

	const changeReturnIcon =
		window.innerWidth > 992 ? (
			<i className='fa-solid fa-arrow-left'></i>
		) : (
			<i className='fa-solid fa-arrow-up'></i>
		)

	if (active) {
		return (
			<div
				className={`${styles.taskSection} ${animationOut}`}
				style={showOnlyImportant}
			>
				<div>
					<p className={styles.task}>
						{iconImportant} {task}
					</p>
					<p className={styles.dateInfo}>
						Wykonać do dnia: <span className={styles.date}>{date}</span>
					</p>
				</div>
				<div className={styles.btnSection}>
					<button onClick={() => doneActiveTask(id)} className={styles.btn}>
						<i className='fa-solid fa-check'></i>
					</button>
					<button onClick={() => showEditTask(id)} className={styles.btn}>
						<i className='fa-solid fa-pen-to-square'></i>
					</button>
					<button onClick={() => delateTask(id)} className={styles.btn}>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className={`${styles.taskSection} ${animationOut}`}>
				<div>
					<p className={styles.task}>
						{iconImportant} {task}
					</p>
					<p className={styles.dateInfo}>
						Wykonane w dniu <span className={styles.date}>{dateDone.slice(0, 10)}</span>
					</p>
				</div>
				<div className={styles.btnSection}>
					<button onClick={() => doneActiveTask(id)} className={styles.btn}>
						{changeReturnIcon}
					</button>
					<button onClick={() => delateTask(id)} className={styles.btn}>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Task
