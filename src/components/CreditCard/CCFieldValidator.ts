import valid from "card-validator"
import pick from "lodash.pick"
import values from "lodash.values"
import every from "lodash.every"
import { useState } from "react"

const toStatus = (validation:any) => {
	return validation.isValid
		? "valid"
		: validation.isPotentiallyValid
		? "incomplete"
		: "invalid"
}

const FALLBACK_CARD = { gaps: [4, 8, 12], lengths: [16], code: { size: 3 } }

const CCFieldValidator = ({ displayedFields, validatePostalCode }:any) => {
	const [formValues, setFormValues] = useState({
		number: "",
		expiry: "",
		cvc: "",
		name: "",
		postalCode: "",
	})

	const validateValues = () => {
		const numberValidation = valid.number(formValues.number)
		const expiryValidation = valid.expirationDate(formValues.expiry)
		const maxCVCLength = (numberValidation.card || FALLBACK_CARD).code.size
		const cvcValidation = valid.cvv(formValues.cvc, maxCVCLength)

		const validationStatuses = pick(
			{
				number: toStatus(numberValidation),
				expiry: toStatus(expiryValidation),
				cvc: toStatus(cvcValidation),
				name: !!formValues.name ? "valid" : "incomplete",
				postalCode: validatePostalCode(formValues.postalCode),
			},
			displayedFields,
		)

		return {
			valid: every(
				values(validationStatuses),
				(status: any) => status === "valid",
			),
			status: validationStatuses,
		}
	}

	return { formValues, setFormValues, validateValues }
}

export default CCFieldValidator
