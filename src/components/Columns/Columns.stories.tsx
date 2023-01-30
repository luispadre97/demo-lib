import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Column } from "./column"

import { Columns } from "./colums"

import Alert from "../Alert"

const Template: ComponentStory<typeof Column> = (args) => (
	<Columns>
		<Column {...args}>
			<Alert title={`${args.size}`} closable={false} />
		</Column>
	</Columns>
)
export default {
	title: "Componente/Column",
	component: Column,
} as ComponentMeta<typeof Column>

export const Primary = Template.bind({})
Primary.args = {
	size: "is-6",
	// className: "gapsi-alert-default",
}

export const DiferentesColumns: ComponentStory<typeof Column> = () => {
	return (
		<>
			<Columns>
				<Column size="is-1">
					<Alert title="is-1" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column size="is-2">
					<Alert title="is-2" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column size="is-3">
					<Alert title="is-3" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column size="is-4">
					<Alert title="is-4" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column size="is-5">
					<Alert title="is-5" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column size="is-6">
					<Alert title="is-6" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column size="is-7">
					<Alert title="is-7" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column size="is-8">
					<Alert title="is-8" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column size="is-9">
					<Alert title="is-9" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column size="is-10">
					<Alert title="is-10" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column size="is-11">
					<Alert title="is-11" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<Columns>
				<Column size="is-12">
					<Alert title="is-12" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>

			<Columns>
				<Column size="is-1">
					{" "}
					<Alert title="is-1" closable={false} />
				</Column>
				<Column size="is-4">
					{" "}
					<Alert title="is-4" closable={false} />
				</Column>
				<Column size="is-7">
					{" "}
					<Alert title="is-7" closable={false} />
				</Column>
				<Column size="is-1">
					{" "}
					<Alert title="is-1" closable={false} />
				</Column>
				<Column>
					{" "}
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
			<br />

			<Columns>
				<Column size="is-full">
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
				<Column>
					<Alert title="auto" closable={false} />
				</Column>
			</Columns>
		</>
	)
}
