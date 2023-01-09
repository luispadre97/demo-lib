import { FC, ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface BaseProps {
  className?: string;
  children?: ReactNode;
}
type NativeDivProps = BaseProps & HTMLAttributes<HTMLElement>

export type ColumnProps = Partial<NativeDivProps & BaseProps>
export const Column: FC<ColumnProps> = (props) => {
  const { children, className, ...restProps } = props
  const classes = classNames('column', className)
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  )
}