import { FC, ReactNode, useEffect, useState } from "react"
import classNames from "classnames"

export type StatusType =
	| "primary"
	| "default"
	| "success"
	| "warning"
	| "danger"
	| "info"

export interface FlipCardProps {
	className?: string
	front: ReactNode
	back: ReactNode
	width?: string | number | undefined
	height?: string | number | undefined
}

export const FlipCard: FC<FlipCardProps> = (props) => {
	const {
		className,
		front,
		back,
		width = 400,
		height = 250,
		...restProps
	} = props

	const [state, setState] = useState({ flipped: true })
	const classes = classNames("flipCard-container",` ${state.flipped ? "flipped" : ""}`, className, {
    
  })


	const handleClick = () => {
		setState({ flipped: !state.flipped })
	}

	const Back = (props: any) => {
		return (
			<div className="front" style={{ width, height }}>
				<div>{props.children}</div>
			</div>
		)
	}
	const Front = (props: any) => {
		return (
			<div
				className={"back"}
				style={{ width, height}}
			>
				<div>{props.children}</div>
			</div>
		)
	}

	return (
		<div
			className={classes}
			{...restProps}
			style={{ width: width, height: height }}
			onClick={handleClick}
		>
			<div className="flipCard">
				<Front>{front}</Front>
				<Back>{back}</Back>
			</div>
		</div>
	)
}
