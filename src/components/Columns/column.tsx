import { FC, ReactNode, HTMLAttributes } from "react"
import classNames from "classnames"

export type ColumnType =
	| "is-1"
	| "is-2"
	| "is-3"
	| "is-4"
	| "is-5"
	| "is-6"
	| "is-7"
	| "is-8"
	| "is-9"
	| "is-10"
	| "is-11"
	| "is-12"
  | undefined

export interface BaseProps {
	className?: string
	children?: ReactNode
	size?: ColumnType
}
type NativeDivProps = BaseProps & HTMLAttributes<HTMLElement>

export type ColumnProps = Partial<NativeDivProps & BaseProps>
export const Column: FC<ColumnProps> = (props) => {
	const { children, className, size, ...restProps } = props
	console.log(props,'props')
	const classes = classNames(
		"column",
		{
			[`${size}`]: size,
		},
		className,
	)
	return (
		<div className={classes} {...restProps}>
			{children}
		</div>
	)
}
