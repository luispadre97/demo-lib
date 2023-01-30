import { ComponentMeta, ComponentStory } from "@storybook/react"
import Alert from "./alert"
import { action } from "@storybook/addon-actions"

const Template: ComponentStory<typeof Alert> = (args) => (
	<Alert {...args}></Alert>
)
const stylesAlert: ComponentStory<typeof Alert> = () => {
	return (
		<>
			<Alert title="esto es una alerta de tipo Success" type="success"></Alert>
			<Alert title="esto es una alerta de tipo Danger!" type="danger"></Alert>
			<Alert title="esto es una alerta de tipo Warning!" type="warning" closable={false}></Alert>
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
	title: "Componente/Alert",
	component: Alert,
} as ComponentMeta<typeof Alert>

stylesAlert.storyName = "Estilo de botón predeterminado"

export const DefaultAlert = Template.bind({})
export const stylesAlertF = stylesAlert.bind({})
export const descAlertF = descAlert.bind({})
stylesAlertF.storyName = "Alertas en diferentes estilos."

DefaultAlert.args = {
	title: "esto es una alerta!",
}
DefaultAlert.storyName = "Alert sucess"
