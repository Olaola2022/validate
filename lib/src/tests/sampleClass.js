"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
const _simple_async_validate_1 = require("@simple-async-validate");
class SampleClass {
    validateNullable(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateBlank(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateMinLength(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateMaxLength(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateInclusion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateURL(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateRange(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateCustom(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateNumeric(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { nullable: true, minLength: 3 } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateNullable", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { blank: false } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateBlank", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { minLength: 3 } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateMinLength", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { maxLength: 5 } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateMaxLength", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { in: ["included"] } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateInclusion", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { isURL: true } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateURL", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { range: { min: 1, max: 100 } } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateRange", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { custom: (value) => { throw Error(`${value}`); } } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateCustom", null);
__decorate([
    (0, _simple_async_validate_1.validate)({ sampleAttr: { isNumeric: true } }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SampleClass.prototype, "validateNumeric", null);
exports.default = SampleClass;
//# sourceMappingURL=sampleClass.js.map