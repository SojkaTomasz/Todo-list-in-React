import ClickButton from "../../../context/ClickButton"
import { useContext } from "react"

const SortTaskImportant = props => {
	const sort = useContext(ClickButton)

	const style = {
		backgroundColor: "tomato",
	}
	const { id, text, active } = props
	return (
		<li onClick={() => sort.sortTaskImportant(id)} style={active ? style : null}>
			{text}
		</li>
	)
}

export default SortTaskImportant
