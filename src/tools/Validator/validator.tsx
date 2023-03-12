interface ValidatorType {
	isNotEmpty: (value: string | number[] | { key?: undefined; } | { key: string; } | null | undefined) => boolean
	isNotEmptyIncludeFalse: (value: any) => boolean
	isNum: (value: any) => boolean
	isInt: (value: any) => boolean
	isDecimal: (value: any) => boolean
	isArray: (value: any) => boolean
	isRegExp: (value: any) => boolean
	isObject: (value: any) => boolean
	isFunc: (value: any) => boolean
	isEmail: (value: any) => boolean
	isUrl: (value: any) => boolean
	isHex: (value: any) => boolean
}

const PATTERN = {
	EMAIL: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,7})$/,
	URL: /^https?:\/\/(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}/,
	HEX: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i,
	NUM: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
}

const Validator: ValidatorType = {
	isNotEmpty: (value: string | number[] | { key?: undefined; } | { key: string; } | null | undefined) => {
		// empty means empty string, empty array, empty object & null & undefined
		if (typeof value == "string") {
			return value.length !== 0
		} else if (typeof value == "object") {
			if (value instanceof Array) {
				return value.length !== 0
			} else {
				let i = 0
				for (let key in value) {
					i++
				}
				return !!i
			}
		} else if (typeof value == "number") {
			return true
		} else {
			if (value === false) {
				console.log(
					"Cuando vea este mensaje, significa que hay una situación en el código de validación de su formulario que considera que el valor booleano es falso (método isNotEmpty). El componente básico actualizará esta lógica de error en un futuro próximo, puede usar isNotEmptyIncludeFalse en su lugar",
				)
			}
			return !!value
		}
	},

	isNotEmptyIncludeFalse: (value: any) => {
		if (value === false) {
			return true
		}
		return Validator.isNotEmpty(value)
	},

	isNum: (value: any) => {
		return PATTERN.NUM.test(value)
	},

	isInt: (value: any) => {
		return Validator.isNum(value) && parseInt(value) == value
	},

	isDecimal: (value: any) => {
		return Validator.isNum(value) && !Validator.isInt(value)
	},

	isArray: (value: any) => {
		return Array.isArray(value)
	},

	isRegExp: (value: any) => {
		if (value instanceof RegExp) {
			return true
		}

		try {
			return !!new RegExp(value)
		} catch (e) {
			return false
		}
	},

	isObject: (value: any) => {
		return typeof value === "object" && !Validator.isArray(value)
	},

	isFunc: (value: any) => {
		return typeof value === "function"
	},

	isEmail: (value: any) => {
		return typeof value === "string" && PATTERN.EMAIL.test(value)
	},

	isUrl: (value: any) => {
		return typeof value === "string" && PATTERN.URL.test(value)
	},

	isHex: (value: any) => {
		return typeof value === "string" && PATTERN.HEX.test(value)
	},
}

export default Validator
