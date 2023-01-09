
let Validator:any = {};

const PATTERN = {
    EMAIL: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,7})$/,
    URL: /^https?:\/\/(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}/,
    HEX: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i,
    NUM: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
};

Validator.isNotEmpty = (value:String) => {
    // empty means empty string, empty array, empty object & null & undefined
    if (typeof value == "string") {
        return value.length !== 0
    }
    else if (typeof value == 'object') {
        if (value instanceof Array) {
            return value.length !== 0
        }
        else {
            let i = 0;
            for (let key in value) {
                i++;
            }
            return !!i;
        }
    }
    else if (typeof value == 'number') {
        return true;
    }
    else {
      if (value === false) {
        console.log("Cuando vea este mensaje, significa que hay una situación en el código de validación de su formulario que considera que el valor booleano es falso (método isNotEmpty). El componente básico actualizará esta lógica de error en un futuro próximo, puede usar isNotEmptyIncludeFalse en su lugar");
      }
      return !!value;
    }
}

Validator.isNotEmptyIncludeFalse = (value:any) => {
  if (value === false) {
    return true
  }
  return Validator.isNotEmpty(value)
}

Validator.isNum = (value:any) => {
    return PATTERN.NUM.test(value);
}

Validator.isInt = (value:any) => {
    return Validator.isNum(value) && parseInt(value) == value;
};

Validator.isDecimal = (value:any) => {
    return Validator.isNum(value) && !Validator.isInt(value);
};

Validator.isArray = (value:any) => {
    return Array.isArray(value);
};

Validator.isRegExp = (value:any) => {
    if (value instanceof RegExp) {
        return true;
    }

    try {
        return !!new RegExp(value);
    } catch (e) {
        return false;
    }
};

Validator.isObject = (value:any) => {
    return typeof(value) === 'object' && !Validator.isArray(value);
};

Validator.isFunc = (value:any) => {
    return typeof(value) === 'function';
};

Validator.isEmail = (value:any) => {
    return typeof(value) === 'string' && PATTERN.EMAIL.test(value);
};

Validator.isUrl = (value:any) => {
    return typeof(value) === 'string' && PATTERN.URL.test(value);
};

Validator.isHex = (value:any) => {
    return typeof(value) === 'string' && PATTERN.HEX.test(value);
};


export default Validator;