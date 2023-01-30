import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Chip } from "./chip"
// import mdx from './button.mdx'

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export default {
	title: "Componente/Chip",
	component: Chip,
} as ComponentMeta<typeof Chip>

export const Primary = Template.bind({});
Primary.args={
  text:"example"
}
export const Chips: React.FC = () => (
  <>
  <Chip text="example" status="primary"/>
  <Chip text="example" status="info"/>
  <Chip text="example" status="success"/>
  <Chip text="example" status="default"/>
  <Chip text="example" status="warning"/>
  <Chip text="example" status="danger"/>
  </>
);