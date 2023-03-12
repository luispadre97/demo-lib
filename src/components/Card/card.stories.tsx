import { Card } from "./card"
import { ComponentMeta, ComponentStory } from "@storybook/react"
// import mdx from './button.mdx'

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export default {
	title: "Componente/Card",
	component: Card,
} as ComponentMeta<typeof Card>
export const ADefault = Template.bind({})
ADefault.args = {
	children: "Default Card",
	width: 350,
	height: 250,
	shadow: "dark",
}

ADefault.decorators = [
	(Story) => (
		<div style={{ margin: 50 }}>
			<Story />
		</div>
	),
]
