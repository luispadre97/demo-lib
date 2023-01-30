import React, { FC, useContext, ReactNode } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import { SelectContext } from './select'
export interface SelectOptionProps {
  index?: string;
  /** De forma predeterminada, el filtro se basa en el valor de este atributo, que no puede ser el mismo*/
  value: string;
  /** La etiqueta de la opción, si no se establece, el valor predeterminado es el mismo que value*/
  label?: string;
  /** Ya sea para deshabilitar esta opción*/
  disabled?: boolean;
  children?: ReactNode;
}

export const Option: FC<SelectOptionProps> = ({value, label, disabled, children, index}) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext)
  const isSelected = selectedValues.includes(value)
  const classes = classNames('gapsi-select-item', {
    'is-disabled': disabled,
    'is-selected': isSelected,
  })
  const handleClick = (e: React.MouseEvent, value: string, isSelected: boolean) => {
    e.preventDefault()
    if(onSelect && !disabled) {
      onSelect(value, isSelected)
    }
  }
  return (
    <li key={index} className={classes} onClick={(e) => {handleClick(e, value, isSelected)}}>
      {children || (label ? label: value)}
      {multiple && isSelected && <Icon icon="check"/>}
    </li>
  )
}

Option.displayName = 'Option'

export default Option;