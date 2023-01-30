import { ComponentMeta, ComponentStory } from "@storybook/react"


import {Text} from './text'
const Template: ComponentStory<typeof Text> = (args) => (
	<Text {...args}></Text>
)
export default {
	title: "Componente/Text",
	component: Text,
} as ComponentMeta<typeof Text>

export const Primary = Template.bind({})
Primary.args = {
	text:"demo",
  type:"title"
}

export const DiferentesColumns: ComponentStory<typeof Text> = () => {
	return (
		<>
    <Text type="title">title</Text>
    <Text type="title" >title</Text>
    <Text type="subtitle">subtitle</Text>
		</>
	)
}
