import valid from "card-validator"
import { removeNonNumber, removeLeadingSpaces } from "./Utilities"
import pick from "lodash.pick"

const limitLength = (string = "", maxLength: any) => string.substr(0, maxLength)
const addGaps = (string = "", gaps: any) => {
	const offsets = [0].concat(gaps).concat([string.length])

	return offsets
		.map((end, index) => {
			if (index === 0) return ""
			const start = offsets[index - 1]
			return string.substr(start, end - start)
		})
		.filter((part) => part !== "")
		.join(" ")
}

const FALLBACK_CARD = { gaps: [4, 8, 12], lengths: [16], code: { size: 3 } }

const CCFieldFormatter = (displayedFields: any) => {
	const _displayedFields = [...displayedFields, "type"]

	const formatValues = (values: any) => {
		const card: any = valid.number(values.number).card || FALLBACK_CARD

		return pick(
			{
				type: card.type,
				number: _formatNumber(values.number, card),
				expiry: _formatExpiry(values.expiry),
				cvc: _formatCVC(values.cvc, card),
				name: removeLeadingSpaces(values.name),
				postalCode: removeNonNumber(values.postalCode),
			},
			_displayedFields,
		)
	}

	const _formatNumber = (number: any, card: any) => {
		const numberSanitized = removeNonNumber(number)
		const maxLength = card.lengths[card.lengths.length - 1]
		const lengthSanitized = limitLength(numberSanitized, maxLength)
		const formatted = addGaps(lengthSanitized, card.gaps)
		return formatted
	}

	const _formatExpiry = (expiry: any) => {
		const sanitized = limitLength(removeNonNumber(expiry), 4)
		if (sanitized.match(/^[2-9]$/)) {
			return `0${sanitized}`
		}
		if (sanitized.length > 2) {
			return `${sanitized.substr(0, 2)}/${sanitized.substr(
				2,
				sanitized.length,
			)}`
		}
		return sanitized
	}

	const _formatCVC = (cvc: any, card: any) => {
		const maxCVCLength = card.code.size
		return limitLength(removeNonNumber(cvc), maxCVCLength)
	}

	return {
		formatValues,
	}
}

export default CCFieldFormatter
