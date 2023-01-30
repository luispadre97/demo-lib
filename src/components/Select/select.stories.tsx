import { ComponentMeta } from '@storybook/react'


import Select from './index'
export default {
  title: 'Componente/Select',
  component: Select,
  id: 'Select',
  subcomponents: { 'Option': Select.Option },
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>

export const ADefaultSelect = (args:any) => (
  <Select
    {...args}
    placeholder="por favor elige"
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="disabled" disabled/>
    <Select.Option value="nihao5" />
  </Select>
)
ADefaultSelect.storyName = 'Selección predeterminada'
export const BMultipleSelect = (args:any) => (
  <Select
    {...args}
    placeholder="Admite selección múltiple"
    multiple
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
    <Select.Option value="gapsi" />
    <Select.Option value="gapsi2" />
  </Select>
)
BMultipleSelect.storyName = 'Admite selección múltiple Select'
export const CDisabledSelect = (args:any) => (
  <Select
    {...args}
    placeholder="desactivado"
    disabled
  >
    <Select.Option value="nihao" />
    <Select.Option value="nihao2" />
    <Select.Option value="nihao3" />
  </Select>  
)
CDisabledSelect.storyName = 'desactivado Select'