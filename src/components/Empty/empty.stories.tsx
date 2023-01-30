import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Empty } from "./empty "

export default {
	title: "Componente/Empty",
	component: Empty,
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />

export const Primary = Template.bind({})
Primary.args = {
}


export const Exmaples = () => {
	return (
		<>
			<Empty />
			<Empty description="No hay datos" />
			<Empty
				imageStyle={{
					height: 60,
				}}
				image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
				description="No hay datos"
			/>
		</>
	)
}
