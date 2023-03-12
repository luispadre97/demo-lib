// import { FC, ReactNode } from "react"
// import classNames from "classnames"
// import Button from "../Button"
// import Icon from "../Icon"
// import Transition from "../Transition"
// import { AnimationName } from "../Transition/transition"

// export interface ModalProps {
// 	className?: string
// 	open?: boolean
// 	animation?: AnimationName
// 	title?: String
// 	children?: ReactNode
// 	onOk?: React.MouseEventHandler
// 	onCancel?: React.MouseEventHandler
// }
// export const Modal: FC<ModalProps> = (props) => {
// 	const {
// 		className,
// 		open,
// 		onOk,
// 		onCancel,
// 		animation = "zoom-in-left",
// 		title,
// 		children,
// 		...restProps
// 	} = props
// 	const classes = classNames("modal", className, {})

// 	return (
// 		<Transition in={open} timeout={300} animation={animation}>
// 			<div className="root-modal">
// 				<div className={classes}>
// 					<div className="modal_header">
// 						<h5>{title}</h5>
// 						<div className="modal_close">
// 							<Icon onClick={onOk} icon={"close"} />
// 						</div>
// 					</div>
// 					<div className="modal_body">{children}</div>
// 					<div className="modal_footer">
// 						<Button onClick={onOk} btnType="danger">
// 							Cancelar
// 						</Button>
// 						<Button
// 							onClick={onOk}
// 							btnType="primary"
// 							style={{ marginInlineStart: 8 }}
// 						>
// 							Ok
// 						</Button>
// 					</div>
// 				</div>
// 			</div>
// 		</Transition>
// 	)
// }

import { FC, ReactNode, useEffect } from 'react'
import classNames from "classnames"
import Button from '../Button'
import Icon from '../Icon'
import Transition from '../Transition'
import { AnimationName } from '../Transition/transition'
export interface ModalProps {
  className?: string
  open?:boolean
  animation?:AnimationName
  title?:String
  children?:ReactNode,
  onOk?:React.MouseEventHandler
  onCancel?:React.MouseEventHandler
}
export const Modal: FC<ModalProps> = (props) => {
  const { className,open,onOk,onCancel,animation="zoom-in-left",title,children, ...restProps } = props
  const classes = classNames("modal", className, {
  })


	useEffect(() => {
    if (open) {
      window.addEventListener('popstate', handleBackButton);
    } else {
      window.removeEventListener('popstate', handleBackButton);
    }
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [open]);

  const handleBackButton = (event: PopStateEvent) => {
    onCancel();
  };
  return (
    <Transition in={open} timeout={300} animation={animation}>
    <div className='root-modal'>
      <div className={classes}>
        <div className="modal_header">
          <h5>{title}</h5>
          <div className='modal_close'>
            <Icon onClick={onCancel}  icon={'close'}/>
        </div>
        </div>
        <div className="modal_body">
          {children}
        </div>
        <div className="modal_footer">
          <Button onClick={onCancel} btnType='danger'>Cancelar</Button>
          <Button onClick={onOk} btnType='primary' style={{ marginInlineStart: 8 }}>Ok</Button>
        </div>
      </div>
    </div>
    </Transition>
  )
}