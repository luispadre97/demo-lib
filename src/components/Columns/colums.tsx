import { FC, ReactNode } from 'react'
import classNames from 'classnames'

export interface ColumnsProps {
  className?: string;
  children?: ReactNode;
}

export const Columns:FC<ColumnsProps>=(props)=>{
  const {children,className,...restProps}=props
  const classes = classNames('columns is-multiline', className)
  return(
    <div className={classes} {...restProps}>
      {children}
    </div>
  )
}