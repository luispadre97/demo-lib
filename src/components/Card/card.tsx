import React, { FC, HTMLAttributes, ReactNode } from "react"
import classNames from "classnames"
import { Text } from "../Text/text"

type shadow = "light" | "dark"
export interface BaseCardProps {
	className?: string
	header?: ReactNode
	footer?: ReactNode
	title?: ReactNode
	bodyStyle?: React.CSSProperties
	img?: string
	shadow?: shadow
	children?: ReactNode
	styleImg?: React.CSSProperties
	width?: string | number
	height?: string | number
}

type NativeDivProps = BaseCardProps & HTMLAttributes<HTMLElement>

export const Card: FC<NativeDivProps> = ({
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
}) => {
	const classes = classNames("gapsi-card ", className, {
		[`card-${shadow}`]: shadow,
	})

	return (
		<div className={classes} style={{ width, height }} {...restProps}>
			{img && (
				<img
					className="card-image waves-effect waves-block waves-light"
					src={img}
					style={styleImg}
				/>
			)}
			{title && typeof title === "string" ? (
				<div className="">
					<Text className="is-5" type="title" text={title} />
				</div>
			) : (
				title
			)}
			{children && (
				<div className={'gapsi-card-content'} style={bodyStyle}>
					{children}
				</div>
			)}
			{footer && <div className="gapsi-card-footer">{footer}</div>}
		</div>
	)
}
