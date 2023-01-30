import React, { FC, ReactNode, useState } from "react"
import classNames from "classnames"
import Icon from "../Icon"
import Transition from "../Transition"
export type AlertType = "success" | "default" | "danger" | "warning"

export interface AlertProps {
	/** título */
	title: string
	/**describir */
	description?: string
	/**Escriba cuatro opciones para cuatro escenarios diferentes*/
	type?: AlertType
	/**Evento activado cuando se cierra la alerta */
	onClose?: () => void
	/** Si mostrar el icono de cerrar */
	closable?: boolean
	children?:ReactNode
}
/**
 * Se utiliza para mostrar información importante sobre avisos en la página. Haga clic en la cruz a la derecha y el aviso desaparecerá automáticamente
 * ### método de referencia
 *
 *~~~js
 * importar {Alert} de 'gapshiship'
 * ~~~
 */
export const Alert: FC<AlertProps> = (props) => {
	const [hide, setHide] = useState(false)
	const { title, description, type, onClose, closable,children } = props
	const classes = classNames("gapsi-alert", {
		[`gapsi-alert-${type}`]: type,
	})
	const titleClass = classNames("gapsi-alert-title", {
		"bold-title": description,
	})
	const handleClose = (e: React.MouseEvent) => {
		if (onClose) {
			onClose()
		}
		setHide(true)
	}
	return (
		<Transition in={!hide} timeout={300} animation="zoom-in-top">
			<div className={classes}>
			{children?children:<span className={titleClass}>{title}</span>}
				
				{children?<></>:description && <p className="gapsi-alert-desc">{description}</p>}
				{closable && (
					<span className="gapsi-alert-close" onClick={handleClose}>
						<Icon icon="times" />
					</span>
				)}
			</div>
		</Transition>
	)
}

Alert.defaultProps = {
	type: "default",
	closable: true,
}
export default Alert


