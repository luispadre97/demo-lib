import { FC } from 'react'
import classNames from 'classnames'
import Transition from "../Transition"



export interface BreadcrumbProps {
  className?: string;
  isLowContrast?: boolean;
  // status?: StatusType;
  text: string;
}


export const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { className, text, ...restProps } = props
  const classes = classNames('breadcrumb', className, {
    [`breadcrumb-${status}`]: status,
  })
  return (
    <Transition  timeout={300} animation="zoom-in-top">
    <div className={classes} {...restProps}>
      {text}
    </div>
    </Transition>
  )
}