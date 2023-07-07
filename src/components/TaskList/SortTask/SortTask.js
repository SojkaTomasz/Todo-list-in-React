const SortTask = props => {
	const style = {
		backgroundColor: "tomato",
	}
	const {id, text, active, sortTask} = props
	return (
		<li onClick={() => sortTask(id)} style={active ? style : null}>
			{text}
		</li>
	)
}

export default SortTask
