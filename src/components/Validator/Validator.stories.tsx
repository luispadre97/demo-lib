import { ComponentStory, ComponentMeta } from "@storybook/react"
import Form from "../Form/form"
import Input from "../Input"
import {useState} from 'react'

import Validator from "./validator"

export default {
	title: "Herramientas/Validaciones",
	component: Validator,
}
const Template: ComponentStory<any> = (args: any) => {
	console.log(args)
  const [value,setValue]=useState('No')
	return (
		<Form>
			<p>Value:</p>
			<input type="text" value={value}  onChange={(e)=>setValue(e.target.value)}/>
			<p>Result: {value ? "Not Empty" : "Empty"}</p>
		</Form>
	)
}

export const ValidatorDemo = Template.bind({})
ValidatorDemo.args = {
  
}
// ClickMenu.args = {
//   value: 'Value',
//   result: Validator.isNotEmpty("value")
// }

// const validations = [
// 	{
// 		validation: "isNotEmpty",
// 		description:
// 			"Los objetos vacíos, las matrices vacías y las cadenas vacías se interpretan como vacías.",
// 	},
// 	{
// 		validation: "isNum",
// 		description:
// 			"Determine si es un número Tenga en cuenta que los números aquí incluyen dos tipos de datos: cadena y valor.",
// 	},
// 	{ validation: "isInt", description: "¿Es un número entero?" },
// 	{ validation: "isDecimal", description: "es un decimal" },
// 	{ validation: "isArray", description: "" },
// 	{ validation: "isRegExp", description: "" },
// 	{ validation: "isObject", description: "" },
// 	{ validation: "isFunc", description: "" },
// 	{ validation: "isEmail", description: "" },
// 	{
// 		validation: "isUrl",
// 		description:
// 			"Solo realice la detección de la parte del host. Esta es solo una detección muy básica. Debe hacer coincidir los caracteres ilegales para pasarla.",
// 	},
// 	{ validation: "isHex", description: "" },
// ]

export const isNotEmpty = () => {
	const value = "Value"
	const result = Validator.isNotEmpty(value)
	return (
		<div>
			<p>Value: {value}</p>
			<p>Result: {result ? "Not Empty" : "Empty"}</p>
		</div>
	)
}

export const isInteger = () => {
	const input = 123
	const isInt = Validator.isInt(input)
	return (
		<div>
			<div>Input: {input}</div>
			<div>Is integer: {isInt.toString()}</div>
		</div>
	)
}

export const isNumber = () => {
	const input = "123"
	const isNum = Validator.isNum(input)
	return (
		<div>
			<div>Input: {input}</div>
			<div>Is number: {isNum.toString()}</div>
		</div>
	)
}

export const isEmail = () => {
	const input = "example@email.com"
	const email = Validator.isEmail(input)

	return (
		<div>
			<div>Input: {input}</div>
			<div>Is email: {email.toString()}</div>
		</div>
	)
}
