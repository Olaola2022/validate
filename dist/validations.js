"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUUID = exports.validateNumeric = exports.validateRange = exports.validateCustom = exports.validateURL = exports.validateBlank = exports.validateInclusion = exports.validateMaxLength = exports.validateMinLength = void 0;
const validationError_1 = require("./validationError");
const validateMinLength = (name, attr, minLength) => {
    if (attr.length < minLength)
        throw new validationError_1.ValidationError(`Length error: ${name} should be ${minLength} characters at least`);
};
exports.validateMinLength = validateMinLength;
const validateMaxLength = (name, attr, maxLength) => {
    if (attr.length > maxLength)
        throw new validationError_1.ValidationError(`Length error: ${name} should be ${maxLength} characters max`);
};
exports.validateMaxLength = validateMaxLength;
const validateInclusion = (name, attr, mustBeIn) => {
    if (!mustBeIn.includes(attr))
        throw new validationError_1.ValidationError(`Inclusion error: ${name} is not a valid argument`);
};
exports.validateInclusion = validateInclusion;
const validateBlank = (name, attr) => {
    if (attr.length === 0)
        throw new validationError_1.ValidationError(`Blank error: ${name} could not be blank`);
};
exports.validateBlank = validateBlank;
const validateURL = (name, attr) => {
    try {
        new URL(attr);
    }
    catch (_) {
        throw new validationError_1.ValidationError(`URL validation error: ${name} is not an URL`);
    }
};
exports.validateURL = validateURL;
const validateCustom = (name, attr, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield callback(attr);
    if (!result)
        throw new validationError_1.ValidationError(`Custom validation error: ${name} is invalid`);
});
exports.validateCustom = validateCustom;
const validateRange = (name, attr, between) => {
    const number = attr;
    if (!(between.min <= number && number <= between.max)) {
        throw new validationError_1.ValidationError(`Range validation error: ${name} must be between ${between.min} and ${between.max}`);
    }
};
exports.validateRange = validateRange;
const validateNumeric = (name, attr) => {
    if (typeof attr === "number")
        return;
    if (typeof attr != "string")
        throw new validationError_1.ValidationError(`Numeric validation error: ${name} should be a string number`);
    if (!(/^-?\d+$/.test(attr)))
        throw new validationError_1.ValidationError(`Numeric validation error: ${name} should be a number`);
};
exports.validateNumeric = validateNumeric;
const validateUUID = (name, attr) => {
    if (typeof attr != "string")
        throw new validationError_1.ValidationError(`UUID validation error: ${name} should be a string`);
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if (!regexExp.test(attr))
        throw new validationError_1.ValidationError(`UUID validation error: ${name} should be a UUID`);
};
exports.validateUUID = validateUUID;
