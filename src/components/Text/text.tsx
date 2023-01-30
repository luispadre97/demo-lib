import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react"
import classNames from "classnames"

export type TextType = "title" | "subtitle"
export type TypeFontSize =
	| "is-1"
	| "is-2"
	| "is-3"
	| "is-4"
	| "is-5"
	| "is-6"
	| "is-7"
export interface TitleBaseProps {
	className?: String
	type: TextType
	fontSize?: TypeFontSize
	text?: ReactNode
	children?: ReactNode
}
type TitleProps = TitleBaseProps &
	DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export const Text: FC<TitleProps> = (props) => {
	const { className, text, type, children,fontSize, ...restProps } = props
	const classes = classNames(type === "title" ? "title" : "subtitle",{
		[`${fontSize}`]:fontSize
	}, className)
	return (
		<p className={classes} {...restProps}>
			{text ? text : children}
		</p>
	)
}
