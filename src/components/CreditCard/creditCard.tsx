import { FC } from "react"
import classNames from "classnames"
import { FlipCard } from "../FlipCard/flipCard"
import Icons from "./utils/icons"

//export type StatusType = 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info'

export interface CreditCardProps {
	className?: string
	brand?: string
	imgBank?: string
	imageFront?: string
	imageBack?: string
	customIcons?: string
	name?: string
	number?: string
	expiry?: string
	cvc?: string
}
import CardFront from "./assets/images/card-violeta-front.png"
import BackFront from "./assets/images/card-violeta-front.png"
import ImgBank from "./assets/icons/stp_card_visa.png"

import { Text } from "../Text/text"
import { Columns } from "../Columns/colums"
import { Column } from "../Columns/column"
import Form from "../Form/form"
import FormItem from "../Form/formItem"
import { Input } from "../Input/input"
import Button from "../Button"
import { CCInput } from "./CCInput"

const defaultProps: any = {
	name: "",
	placeholder: {
		number: "•••• •••• •••• ••••",
		name: "Nombre del titular de la tarjeta",
		expiry: "••/••",
		cvc: "•••",
	},
	write: undefined,
	scale: 1,
	// fontFamily: Platform.select({ ios: "Courier", android: "monospace" }),
	imageFront: CardFront,
	imageBack: BackFront,
}
export const CreditCard: FC<CreditCardProps> = (props) => {
	const {
		className,
		brand,
		imgBank,
		imageFront,
		imageBack,
		customIcons,
		name,
		number,
		expiry,
		cvc,
		...restProps
	} = props
	const classes = classNames("creditCard", className, {})
	// console.log(Icons, "Icons")
	const data = { ...defaultProps }

	const onFinish = (values: any) => {
		// [name]:value
		console.log("Success:", values)
	}
	return (
		<div className={classes}>
			<FlipCard
				back={<Back {...{ data }} />}
				front={<Front {...{ data }} />}
			></FlipCard>
			<Columns>
				<Column className="is-4">
					<Form
						initialValues={{
							userCard: "Luis Antonio Padre García",
							NumberCard: "8765 6789 0987",
							cvv: "12/24",
						}}
						onFinish={onFinish}
					>
						<FormItem name="a">
							<div className="input-group">
								<input type="text" name="" id="text1" placeholder=" " />
								<label htmlFor="text1">Text 1</label>
							</div>
						</FormItem>
						<FormItem name="userCard" label="Nombre del Usuario:">
							<CCInput />
						</FormItem>
						<FormItem name="NumberCard" label="Numero de Tarjeta:">
							<CCInput />
						</FormItem>
						<FormItem name="cvv" label="CVV:">
							<CCInput />
						</FormItem>
						<Button type="submit" btnType="primary">
							iniciar sesión
						</Button>
					</Form>
				</Column>
			</Columns>
		</div>
	)
}
const Front = (props: any) => (
	<div>
		<img
			style={{
				position: "absolute",
				top: 15,
				left: 15,
				width: 60,
				height: 40,
			}}
			src={ImgBank}
		/>
		<img
			style={{
				position: "absolute",
				top: 15,
				right: 15,
				width: 60,
				height: 40,
			}}
			src={Icons["american_express"]}
		/>

		<Text
			text="8765 6789 0987"
			type="subtitle"
			style={{
				backgroundColor: "transparent",
				fontSize: 21,
				position: "absolute",
				top: 100,
				left: 28,
				color: "rgba(255, 255, 255, 0.5)",
			}}
		/>
		<Text
			type="subtitle"
			text="VALID THRU"
			style={{
				color: "rgba(255, 255, 255, 0.8)",
				backgroundColor: "transparent",
				fontSize: 9,
				position: "absolute",
				bottom: 54,
				left: 25,
			}}
		/>
		<Text
			style={{
				color: "rgba(255, 255, 255, 0.8)",
				backgroundColor: "transparent",
				fontSize: 16,
				position: "absolute",
				bottom: 35,
				left: 25,
			}}
			text="12/24"
			type="subtitle"
		></Text>

		<Text
			type="subtitle"
			text="LUIS ANTONIO PADRE GARCIA"
			style={{
				color: "rgba(255, 255, 255, 0.8)",
				backgroundColor: "transparent",
				fontSize: 16,
				position: "absolute",
				bottom: 15,
				left: 25,
				right: 100,
			}}
		></Text>
		<img width={"100%"} src={props.data.imageBack} />
	</div>
)
const Back = (props: any) => (
	<div>
		<img width={"100%"} src={props.data.imageFront} />
		<div
			style={{
				width: "100%",
				height: 35,
				backgroundColor: "#000",
				position: "absolute",
				top: 20,
			}}
		/>
		<div
			style={{
				width: "80%",
				height: 35,
				backgroundColor: "#FFF",
				position: "absolute",
				top: 70,
			}}
		/>
		<Text
			type="subtitle"
			style={{
				color: "rgba(255, 255, 255, 0.8)",
				backgroundColor: "transparent",
				fontSize: 16,
				position: "absolute",
				top: 80,
				right: 30,
			}}
			text="***"
		></Text>
	</div>
)
