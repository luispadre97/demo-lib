import { FC } from 'react'
import classNames from 'classnames'

export type StatusType = 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info'

export interface ChipProps {
  className?: string;
  isLowContrast?: boolean;
  status?: StatusType;
  text: string;
}


export const Chip: FC<ChipProps> = (props) => {
  const { className, text, status, ...restProps } = props
  const classes = classNames('chip', className, {
    [`chip-${status}`]: status,
  })
  return (
    <div className={classes} {...restProps}>
      {text}
    </div>
  )
}