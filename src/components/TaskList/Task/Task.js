import ClickButton from "../../../context/ClickButton"
import styles from "./Task.module.css"
import { useContext } from "react"

const Task = props => {
	const { id, task, date, dateDone, important, active } = props

	const done = useContext(ClickButton)
	const edit = useContext(ClickButton)
	const delate = useContext(ClickButton)

	const iconImportant = important ? (
		<i
			style={{ color: "tomato" }}
			className={`${styles.animationIcon} fa-solid fa-star`}
		></i>
	) : null

	const showOnlyImportant =
		props.sort[2].active && !important ? { display: "none" } : { display: "flex" }

	const animationDeletion = props.animationDeletion
		? styles.animationDeletion
		: {}

	const changeReturnIcon =
		window.innerWidth > 992 ? (
			<i className='fa-solid fa-arrow-left'></i>
		) : (
			<i className='fa-solid fa-arrow-up'></i>
		)

	if (active) {
		return (
			<div
				className={`${styles.taskSection} ${animationDeletion}`}
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
					<button onClick={() => done.done(id)} className={styles.btn}>
						<i className='fa-solid fa-check'></i>
					</button>
					<button onClick={() => edit.edit(id)} className={styles.btn}>
						<i className='fa-solid fa-pen-to-square'></i>
					</button>
					<button onClick={() => delate.delate(id)} className={styles.btn}>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</div>
			</div>
		)
	} else {
		return (
			<div className={`${styles.taskSection} ${animationDeletion}`}>
				<div>
					<p className={styles.task}>
						{iconImportant} {task}
					</p>
					<p className={styles.dateInfo}>
						Wykonane w dniu <span className={styles.date}>{dateDone.slice(0, 10)}</span>
					</p>
				</div>
				<div className={styles.btnSection}>
					<button onClick={() => done.done(id)} className={styles.btn}>
						{changeReturnIcon}
					</button>
					<button onClick={() => delate.delate(id)} className={styles.btn}>
						<i className='fa-solid fa-xmark'></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Task
