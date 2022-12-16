"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.runValidations = void 0;
const validationError_1 = require("./validationError");
const _ = __importStar(require("./validations"));
const runValidations = (validations, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    for (const key of Object.keys(validations)) {
        const payload = args.find(arg => Object.keys(arg).includes(key));
        const attrName = key;
        const validation = validations[key];
        if (!payload && validation.nullable === true) {
            continue;
        }
        if (!payload && !validation.nullable)
            throw new validationError_1.ValidationError(`Presence error: ${attrName} should be present`);
        const attrValue = payload[key];
        if (!attrValue && validation.nullable === false) {
            throw new validationError_1.ValidationError(`Presence error: ${attrName} should be present`);
        }
        if (!attrValue && validation.nullable)
            continue;
        if (validation.blank === false)
            _.validateBlank(attrName, attrValue);
        if (validation.in)
            _.validateInclusion(attrName, attrValue, validation.in);
        if (validation.minLength)
            _.validateMinLength(attrName, attrValue, validation.minLength);
        if (validation.maxLength)
            _.validateMaxLength(attrName, attrValue, validation.maxLength);
        if (validation.isURL)
            _.validateURL(attrName, attrValue);
        if (validation.range)
            _.validateRange(attrName, attrValue, validation.range);
        if (validation.isUUID)
            _.validateUUID(attrName, attrValue);
        if (validation.custom)
            yield _.validateCustom(attrName, attrValue, validation.custom);
        if (validation.isNumeric)
            _.validateNumeric(attrName, attrValue);
    }
    return true;
});
exports.runValidations = runValidations;
