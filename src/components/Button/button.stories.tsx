import Button from './button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
// import mdx from './button.mdx'

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export default {
    title: 'Componente/Button',
    component: Button,
    // parameters: {
    //   docs: {
    //     page: mdx
    //   }
    // }
  } as ComponentMeta<typeof Button>
export const ADefault = Template.bind({})
ADefault.args = {
  children: 'Default Button',
}

ADefault.storyName = 'Estilo de botón predeterminado'
ADefault.decorators=[
    (Story)=>(
        <div style={{margin:50}}><Story/></div>
    )
]
export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large Button',
}
export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small Button',
}
export const Primary = Template.bind({})
Primary.args = {
  btnType: 'primary',
  children: 'Primary Button',
}
export const Danger = Template.bind({})
Danger.args = {
  btnType: 'danger',
  children: 'Danger Button',
}
export const Link = Template.bind({})
Link.args = {
  btnType: 'link',
  children: 'Link Button',
  href: 'https://google.com'
}