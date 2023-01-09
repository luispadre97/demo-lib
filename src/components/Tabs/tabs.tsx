import React, { FC, useState, FunctionComponentElement } from "react"
import classNames from "classnames"
import { TabItemProps } from "./tabItem"
export interface TabsProps {
/**El índice del panel de pestañas actualmente activo, el valor predeterminado es 0 */
	defaultIndex?: number
/**Nombre de clase extensible */
	className?: string
/**Función de devolución de llamada activada al hacer clic en Tabulador */
	onSelect?: (selectedIndex: number) => void
/**Estilo de pestañas, dos opciones, el predeterminado es línea */	type?: "line" | "card"
	children?: React.ReactNode
}
/**
  * Componente de cambio de pestaña.
  * Proporcione un área horizontal para almacenar y mostrar grandes piezas de contenido para mantener limpia la interfaz.
  * ### método de referencia
  *
  *~~~js
  * importar {pestañas} de 'gapshiship'
  * ~~~
  */
export const Tabs: FC<TabsProps> = (props) => {
	const { defaultIndex, className, onSelect, children, type } = props
	const [activeIndex, setActiveIndex] = useState(defaultIndex)
	const handleClick = (
		e: React.MouseEvent,
		index: number,
		disabled: boolean | undefined,
	) => {
		if (!disabled) {
			setActiveIndex(index)
			if (onSelect) {
				onSelect(index)
			}
		}
	}
	const navClass = classNames("gapsi-tabs-nav", {
		"nav-line": type === "line",
		"nav-card": type === "card",
	})
	const renderNavLinks = () => {
		return React.Children.map(children, (child, index) => {
			const childElement = child as FunctionComponentElement<TabItemProps>
			const { label, disabled } = childElement.props
			const classes = classNames("gapsi-tabs-nav-item", {
				"is-active": activeIndex === index,
				disabled: disabled,
			})
			return (
				<li
					className={classes}
					key={`nav-item-${index}`}
					onClick={(e) => {
						handleClick(e, index, disabled)
					}}
				>
					{label}
				</li>
			)
		})
	}
	const renderContent = () => {
		return React.Children.map(children, (child, index) => {
			if (index === activeIndex) {
				return child
			}
		})
	}
	return (
		<div className={`gapsi-tabs ${className}`}>
			<ul className={navClass}>{renderNavLinks()}</ul>
			<div className="gapsi-tabs-content">{renderContent()}</div>
		</div>
	)
}

Tabs.defaultProps = {
	defaultIndex: 0,
	type: "line",
}
export default Tabs
