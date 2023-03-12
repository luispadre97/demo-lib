import React, { useState, createContext, useEffect } from "react"

interface KeyboardAction {
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  key: string;
  method: () => void;
}
interface KeyboardEventContextValue {
  handleKeyboardEvent: (event: KeyboardEvent) => void;
  setCustomActions: (actions: KeyboardAction[]) => void;
  customActions: KeyboardAction[];
}

export const KeyboardEventContext = createContext<KeyboardEventContextValue>({
  handleKeyboardEvent: () => {},
  setCustomActions: () => {},
  customActions: [],
})

export const KeyboardEventProvider: React.FC<any> = ({ children }: any) => {
const [customActions, setCustomActions] = useState<KeyboardAction[]>([])

const handleKeyboardEvent = (event: KeyboardEvent) => {
	for (const action of customActions) {
		if (
			event.ctrlKey === action.ctrlKey &&
			event.shiftKey === action.shiftKey &&
			event.altKey === action.altKey &&
			event.key === action.key
		) {
			try {
      action.method()
     } catch (e) {
				console.error(e)
			}
			break
		}
	}
}

useEffect(() => {
	alert("x")
	window.addEventListener("keydown", handleKeyboardEvent)
	return () => {
		window.removeEventListener("keydown", handleKeyboardEvent)
	}
}, [])

const setCustomKeyboardActions = (actions: any) => {
	console.log(actions,'ACTIONS')
	setCustomActions(actions)
}


console.log(customActions)

return (
	<KeyboardEventContext.Provider value={{ handleKeyboardEvent }}>
		{children}
	</KeyboardEventContext.Provider>
)
}