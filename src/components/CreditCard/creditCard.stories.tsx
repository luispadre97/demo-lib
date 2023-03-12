import { ComponentStory, ComponentMeta } from "@storybook/react"

import {CreditCard} from './creditCard'
export default {
	title: "Componente/CreditCard",
	component: CreditCard,
} as ComponentMeta<typeof CreditCard>

// const Template: ComponentStory<typeof FlipCard> = (args) => <FlipCard {...args} />


export const Exmaples = () => {
	return (
		<>
    <CreditCard/>
		</>
	)
}
