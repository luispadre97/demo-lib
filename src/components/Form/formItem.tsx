import React, { FC, ReactNode, useContext, useEffect } from 'react'
import classNames from 'classnames'
import { FormContext } from './form'
import { CustomRule } from './useStore'
export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
export interface FormItemProps {
  name: string;
  label?: string;
  children?: ReactNode;
  valuePropName?: string;
  trigger?: string;
  getValueFromEvent?: (event: any) => any;
  rules?: CustomRule[];
  validateTrigger?: string;
}

export const FormItem: FC<FormItemProps> = (props) => {
  const {     
    label,
    children,
    name,
    valuePropName,
    trigger,
    getValueFromEvent,
    rules,
    validateTrigger
  } = props as SomeRequired<FormItemProps, 'getValueFromEvent' | 'trigger' | 'valuePropName' | 'validateTrigger'>
  const { dispatch, fields, initialValues, validateField } = useContext(FormContext)
  const rowClass = classNames('gapsi-row', {
    'gapsi-row-no-label': !label
  })
  useEffect(() => {
    const value = (initialValues && initialValues[name]) || ''
    dispatch({ type: 'addField', name, value: { label, name, value, rules: rules || [], errors: [], isValid: true }})
  }, [])
  const fieldState = fields[name]
  const value = fieldState && fieldState.value
  const errors = fieldState && fieldState.errors
  const isRequired = rules?.some(rule => (typeof rule !== 'function') && rule.required)
  const hasError = errors && errors.length > 0
  const labelClass = classNames({
    'gapsi-form-item-required': isRequired
  })
  const itemClass = classNames('gapsi-form-item-control', {
    'gapsi-form-item-has-error': hasError
  })
  const onValueUpdate = (e:any) => {
    const value = getValueFromEvent(e)
    // console.log('new value', value)
    dispatch({ type: 'updateValue', name, value })
  }
  const onValueValidate = async () => {
    await validateField(name)
  }
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }
  const childList = React.Children.toArray(children)
  if (childList.length === 0) {
    console.error('No child element found in Form.Item, please provide one form component')
  }
  if (childList.length > 1) {
    console.warn('Only support one child element in Form.Item, others will be omitted')
  }
  
  if (!React.isValidElement(childList[0])) {
    console.error('Child component is not a valid React Element')
  }
  const child = childList[0] as React.ReactElement
  const returnChildNode = React.cloneElement(
    child,
    { ...child.props, ...controlProps }
  )
  return (
    <div className={rowClass}>
      { label &&
        <div className='gapsi-form-item-label'>
          <label title={label} className={labelClass}>
            {label}
          </label>
        </div>
      }
      <div className='gapsi-form-item'>
        <div className={itemClass}>
          {returnChildNode}
        </div>
        { hasError && 
          <div className='gapsi-form-item-explain'>
            <span>{errors[0].message}</span>
          </div>
        }
      </div>
    </div>
  )
}

FormItem.defaultProps = {
  valuePropName: 'value',
  trigger: 'onChange',
  validateTrigger: 'onBlur',
  getValueFromEvent: (e) => e.target.value
}
export default FormItem