// import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react"
// import classNames from "classnames"

// export type TextType = "title" | "subtitle"
// export type TypeFontSize =
// 	| "is-1"
// 	| "is-2"
// 	| "is-3"
// 	| "is-4"
// 	| "is-5"
// 	| "is-6"
// 	| "is-7"
// export interface TitleBaseProps {
// 	className?: String
// 	type: TextType
// 	fontSize?: TypeFontSize
// 	text?: ReactNode
// 	children?: ReactNode
// }
// type TitleProps = TitleBaseProps &
// 	DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

// export const Text: FC<TitleProps> = (props) => {
// 	const { className, text, type, children,fontSize, ...restProps } = props
// 	const classes = classNames(type === "title" ? "title" : "subtitle",{
// 		[`${fontSize}`]:fontSize
// 	}, className)
// 	return (
// 		<p className={classes} {...restProps}>
// 			{text ? text : children}
// 		</p>
// 	)
// }



import  {FC, useRef, useEffect, ReactNode } from "react"
import * as d3 from "d3"
import { gsap } from "gsap"
import classNames from "classnames"

type TextType = "title" | "subtitle"
type TypeFontSize = "is-1" | "is-2" | "is-3" | "is-4" | "is-5" | "is-6" | "is-7"

export interface TextProps {
	className?: String
	type: TextType
	fontSize?: TypeFontSize
	text?: ReactNode
	children?: ReactNode
}

export const Text: FC<TextProps> = ({
	type,
	fontSize,
	text,
	className,
	...restProps
}) => {
	const classes = classNames(type, fontSize && `${fontSize}`, className)

	// const classes = classNames(type, {[`${fontSize}`]: fontSize,}, className)
// 
	const textRef:any = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		if (textRef.current) {
			const words = textRef.current.textContent.split(" ")

			const tl = gsap.timeline()
			words.forEach((word:any, index:any) => {
				tl.to(textRef.current, {
					delay: index * 0.5,
					duration: 0.5,
					text: `${textRef.current.textContent.slice(
						0,
						textRef.current.textContent.indexOf(word),
					)} ${d3.randomUniform(0, 100)()} ${textRef.current.textContent.slice(
						textRef.current.textContent.indexOf(word) + word.length,
					)}`,
				})
			})
		}
	}, [textRef])

	return (
		<p ref={textRef} className={classes} {...restProps}>
			{text ? text : restProps.children}
		</p>
	)
}
