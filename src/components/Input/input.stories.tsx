import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './input'
export default {
  title: 'Componente/Input',
  id: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const ADefault = Template.bind({})
ADefault.args = {
  placeholder: '漂亮的 Input'
}
ADefault.storyName = 'Entrada predeterminada'
export const BDisabled = Template.bind({})
BDisabled.args = {
  placeholder: 'disabled input',
  disabled: true
}
BDisabled.storyName = 'input deshabilitado'

export const CIcon = Template.bind({})
CIcon.args = {
  placeholder: 'input with icon',
  icon: 'search'
}
CIcon.storyName = 'input con icono'

export const DSizeInput = () => (
  <>
    <Input
      defaultValue="large size"
      size="lg"
    />
    <Input
      placeholder="small size"
      size="sm"
    />
  </>
)
DSizeInput.storyName = 'Inputs de diferentes tamaños'
export const EPandInput = () => (
  <>
    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />
    
  </>
)

EPandInput.storyName = 'Input con prefijo y sufijo'