import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {CSSTransitionProps} from 'react-transition-group/CSSTransition'

export type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps=CSSTransitionProps&{
    animation?:AnimationName,
    wrapper?:boolean,
    children?:React.ReactNode
}

const Transition:React.FC<TransitionProps>=(props)=>{
    const {children,classNames,animation,wrapper,...restProps} = props
    return(
        <CSSTransition classNames = { classNames ? classNames : animation} {...restProps}>
        {wrapper ? <div>{children}</div> : children}
      </CSSTransition>
    )
}
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
  }

  export default Transition

// import React, { useEffect, useState } from "react"
// import { gsap } from "gsap"

// type AnimationName =
// 	| "zoom-in-top"
// 	| "zoom-in-left"
// 	| "zoom-in-bottom"
// 	| "zoom-in-right"

// type TransitionProps = {
// 	animation?: AnimationName
// 	in: boolean
// 	timeout: number
// 	children: React.ReactNode
// 	wrapper?: boolean
// }

// const Transition: React.FC<TransitionProps> = (props) => {
// 	const {
// 		animation = "zoom-in-top",
// 		in: inProp,
// 		timeout,
// 		children,
// 		wrapper = false,
// 		...restProps
// 	} = props
// 	const [element, setElement] = useState<HTMLElement | null>(null)
// 	const [animationComplete, setAnimationComplete] = useState(false)

// 	useEffect(() => {
// 		if (!element) return

// 		if (inProp) {
// 			gsap.to(element, {
// 				duration: timeout / 1000,
// 				opacity: 1,
// 				scale: 1,
// 				y: 0,
// 				x: 0,
// 				onComplete: () => setAnimationComplete(true),
// 			})
// 		} else {
// 			setAnimationComplete(false)
// 			gsap.to(element, {
// 				duration: timeout / 1000,
// 				opacity: 0,
// 				scale: 0.8,
// 				y: animation === "zoom-in-top" ? -20 : 0,
// 				x:
// 					animation === "zoom-in-left"
// 						? -20
// 						: animation === "zoom-in-right"
// 						? 20
// 						: 0,
// 			})
// 		}
// 	}, [element, inProp, timeout, animation])

// 	return (
// 		<div
// 			{...restProps}
// 			style={{
// 				opacity: animationComplete ? 1 : 0,
// 				transform: `scale(${animationComplete ? 1 : 0.8}) translate(${
// 					animation === "zoom-in-left"
// 						? "-20px"
// 						: animation === "zoom-in-right"
// 						? "20px"
// 						: "0"
// 				}, ${animation === "zoom-in-top" ? "-20px" : "0"})`,
// 				transition: `opacity ${timeout}ms, transform ${timeout}ms`,
// 			}}
// 			ref={(el) => setElement(el)}
// 		>
// 			{wrapper ? <div>{children}</div> : children}
// 		</div>
// 	)
// }

// export default Transition
