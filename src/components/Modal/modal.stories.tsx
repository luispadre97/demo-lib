import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useState } from "react"
import Button from "../Button"

import { Modal } from "./modal"
export default {
	title: "Componente/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>

export const Exmaple = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<>
			<Button size="lg" onClick={() => {setShowModal(!showModal)}} >
				Modals
			</Button>
			<Modal
				onCancel={() => setShowModal(false)}
				onOk={() => setShowModal(false)}
				open={showModal}
				animation="zoom-in-left"
				title={"Example Modal"}
			>
				<>Ejempo de Body</>
			</Modal>
		</>
	)
}
