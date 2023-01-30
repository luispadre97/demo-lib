import { ComponentStory, ComponentMeta } from "@storybook/react"

import {FlipCard} from './flipCard'
export default {
	title: "Componente/FlipCard",
	component: FlipCard,
} as ComponentMeta<typeof FlipCard>

// const Template: ComponentStory<typeof FlipCard> = (args) => <FlipCard {...args} />


export const Exmaples = () => {
	return (
		<>
    <FlipCard back={<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Back</div>} front={<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Front</div>}></FlipCard>
		</>
	)
}
