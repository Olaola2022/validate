"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }
}
exports.ValidationError = ValidationError;
