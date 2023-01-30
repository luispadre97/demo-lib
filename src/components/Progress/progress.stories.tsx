import { ComponentMeta, ComponentStory } from "@storybook/react"
import Progress from "./progress";

// import mdx from './button.mdx'

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />

export default {
	title: "Componente/Progress",
	component: Progress,
} as ComponentMeta<typeof Progress>

export const Primary = Template.bind({});
Primary.args={
  percent:10,
}

export const Progresses: React.FC = () => (
  <>
  <Progress percent={10} theme="primary"/>
  <Progress percent={20}  theme="info"/>
  <Progress percent={30}  theme="success"/>
  <Progress percent={40} theme="dark"/>
  <Progress percent={50}  theme="warning"/>
  <Progress percent={60}  theme="danger"/>
  </>
);