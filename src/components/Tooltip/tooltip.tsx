import classNames from "classnames"
import { CSSProperties, FC, ReactNode } from "react"

interface TooltipProps {
	text: string
	className?: string
	position?: "top" | "bottom" | "left" | "right"
	children: ReactNode
	styleTooltip?: CSSProperties | undefined
}

export const Tooltip: FC<TooltipProps> = (props) => {
	const { text, position, children, className, styleTooltip } = props
	const classes = classNames("tooltiptext", className, position)
	return (
		<>
			<div className="tooltip">
				{text}
				<span className={`${classes}`} style={styleTooltip}>
					{children}
				</span>
			</div>
		</>
	)
}
Tooltip.defaultProps = {
	position: "top",
}
