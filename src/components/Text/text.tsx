import { FC, ReactNode } from 'react'
import classNames from 'classnames'

export type TextType = 'title' | 'subtitle'

export interface TitleProps {
  className?: String;
  type: TextType;
  text?: ReactNode;
}
export const Text: FC<TitleProps> = (props) => {
  const { className, text, type, ...restProps } = props
  const classes = classNames(type === 'title' ? 'title' : 'subtitle',className)
  return (
    <p className={classes} {...restProps}>{text}</p>
  )
}