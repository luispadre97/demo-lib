import React, { FC } from "react"

export interface TabItemProps {
/** El texto arriba de la opción Tabulador */
	label: string | React.ReactElement
/** La opción de pestaña está deshabilitada */
	disabled?: boolean

	children?: React.ReactNode
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
	return <div className="gapsi-tab-panel">{children}</div>
}

export default TabItem
