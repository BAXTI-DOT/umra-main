"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPhone = exports.IsPan = void 0;
const class_validator_1 = require("class-validator");
const helper_1 = require("../helper");
const IsPan = (options) => (0, class_validator_1.ValidateBy)({
    name: 'IsPan',
    validator: {
        validate: (value) => typeof value === 'string' && /^\d{16}$/.test(value) && (0, helper_1.luhn)(value),
        defaultMessage: (0, class_validator_1.buildMessage)((each) => each + '$property must be a valid PAN', options),
    },
}, options);
exports.IsPan = IsPan;
const IsPhone = (options) => (0, class_validator_1.ValidateBy)({
    name: 'IsPhone',
    validator: {
        validate: (value) => typeof value === 'string' && /^998(33|77|88|90|91|93|94|95|97|98|99)\d{7}$/.test(value),
        defaultMessage: (0, class_validator_1.buildMessage)((each) => each + '$property must be a valid phone', options),
    },
}, options);
exports.IsPhone = IsPhone;
