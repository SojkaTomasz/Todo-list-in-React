import React from "react"

const ClickButton = React.createContext({
	done: () => {},
	edit: () => {},
	delate: () => {},
	sortTaskImportant: () => {},
	acceptTaskChange: () => {},
	closeEditTask: () => {},
})

ClickButton.displayName = "ClickButton"

export default ClickButton
