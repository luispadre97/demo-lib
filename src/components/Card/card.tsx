import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react"
import classNames from "classnames"
import { Text } from "../Text/text"

export interface BaseCardProps {
	className?: string
	header?: ReactNode
	footer?: ReactNode
	title?: ReactNode
	bodyStyle?: {}
	img?: string
	shadow?: {
		type: String
		default: ""
	}
	children?: ReactNode
	styleImg?: CSSProperties
	width?: string | number
	height?: string | number
}

type NativeDivProps = BaseCardProps & HTMLAttributes<HTMLElement>
export const Card: FC<NativeDivProps> = (props) => {
	const {
		img,
		className,
		title,
		header,
		footer,
		bodyStyle,
		shadow,
		children,
		styleImg,
		width,
		height,
		...restProps
	} = props
	const classes = classNames("gapsi-card-content", className, {
		[`card-${status}`]: status,
	})

	return (
			<div style={{ height, width }} className="gapsi-card" {...restProps}>
				{img && (
					<img  className="card-image waves-effect waves-block waves-light" src={img} />
				)}
				{title && typeof title == "string" ? (
					<div className="gapsi-card-header">
						<Text className={"is-5"} type="title" text={title} />
					</div>
				) : (
					title
				)}
				{children&&(<div className={classes} style={bodyStyle}>
					{children}
				</div>)}
				{footer && <div className="gapsi-card-footer"></div>}
			</div>
	)
}
