import { ComponentMeta, ComponentStory, storiesOf } from "@storybook/react"
import Alert from "./alert"
import { action } from "@storybook/addon-actions"

const Template: ComponentStory<typeof Alert> = (args) => (
	<Alert {...args}></Alert>
)
const stylesAlert: ComponentStory<typeof Alert> = () => {
	return (
		<>
			<Alert title="this is Success" type="success"></Alert>
			<Alert title="this is Danger!" type="danger"></Alert>
			<Alert title="this is Warning!" type="warning" closable={false}></Alert>
		</>
	)
}

const descAlert: ComponentStory<typeof Alert> = () => {
	return (
		<Alert
			title="título rápido"
			description="esta es una descripción larga"
			onClose={action("closed")}
		></Alert>
	)
}
export default {
	title: "Alert",
	component: Alert,
} as ComponentMeta<typeof Alert>

stylesAlert.storyName = "Estilo de botón predeterminado"

export const DefaultAlert = Template.bind({})
export const stylesAlertF = stylesAlert.bind({})
export const descAlertF = descAlert.bind({})
stylesAlertF.storyName = "Alertas en diferentes estilos."

DefaultAlert.args = {
	title: "this is alert!",
}
DefaultAlert.storyName = "Alert sucess"
