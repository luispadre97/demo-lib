import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'
export default {
  title: 'Componente/Tabs',
  id: 'Tabs',
  component: Tabs,
  subcomponents: { 'TabItem': TabItem }
} as ComponentMeta<typeof Tabs>

export const ADefaultTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabItem label="Tab uno">este es el contenido uno</TabItem>
    <TabItem label="Tab dos">este es el contenido dos</TabItem>
    <TabItem label="Tab tres">este es el contenido tres</TabItem>
  </Tabs>
)
ADefaultTabs.storyName = 'Tabs predeterminadas'
// export const BCardTabs: ComponentStory<typeof Tabs> = (args) => (
//   <Tabs {...args} type="card">
//     <TabItem label='card1'>this is card one</TabItem>
//     <TabItem label="card2">this is content two</TabItem>
//     <TabItem label="disabled" disabled>this is content three</TabItem>
//   </Tabs> 
// )
// BCardTabs.storyName = 'Estilo de pestaña Pestañas'
export const CCustomTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} type="card">
    <TabItem label={<><Icon icon="check-circle" />  icono personalizado</>}>Este es el tab 1</TabItem>
    <TabItem label="tab2">este es el contenido dos</TabItem>
  </Tabs> 
)
CCustomTabs.storyName = 'Estilos de Tabs personalizados'