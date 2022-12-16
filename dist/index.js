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
exports.SimpleAsyncValidateConfig = exports.validate = void 0;
const runner_1 = require("./runner");
function validate(validate) {
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield (0, runner_1.runValidations)(validate, ...args)
                    .then(() => originalMethod.apply(this, args))
                    .catch((error) => {
                    return SimpleAsyncValidateConfig.onFailure(error.message);
                });
            });
        };
        return descriptor;
    };
}
exports.validate = validate;
class SimpleAsyncValidateConfig {
}
exports.SimpleAsyncValidateConfig = SimpleAsyncValidateConfig;
SimpleAsyncValidateConfig.onFailure = (error) => error;
