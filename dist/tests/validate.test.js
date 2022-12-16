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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sampleClass_1 = __importDefault(require("./sampleClass"));
describe("Validate decorator", () => {
    const sampleClass = new sampleClass_1.default();
    it("should not validate if nullable", () => __awaiter(void 0, void 0, void 0, function* () {
        const success = yield sampleClass.validateNullable({ sampleAttr: undefined });
        const failure = yield sampleClass.validateNullable({ sampleAttr: "h!" });
        expect(success).toBe(true);
        expect(failure).toBe("Length error: sampleAttr should be 3 characters at least");
    }));
    it("should validate blank", () => __awaiter(void 0, void 0, void 0, function* () {
        const failure = yield sampleClass.validateBlank({ sampleAttr: "" });
        const success = yield sampleClass.validateBlank({ sampleAttr: "hello world!" });
        expect(success).toBe(true);
        expect(failure).toBe("Blank error: sampleAttr could not be blank");
    }));
    it("should validate min length", () => __awaiter(void 0, void 0, void 0, function* () {
        const failure = yield sampleClass.validateMinLength({ sampleAttr: "12" });
        const success = yield sampleClass.validateMinLength({ sampleAttr: "123" });
        expect(success).toBe(true);
        expect(failure).toBe("Length error: sampleAttr should be 3 characters at least");
    }));
    it("should validate max length", () => __awaiter(void 0, void 0, void 0, function* () {
        const failure = yield sampleClass.validateMaxLength({ sampleAttr: "123456" });
        const success = yield sampleClass.validateMaxLength({ sampleAttr: "123" });
        expect(success).toBe(true);
        expect(failure).toBe("Length error: sampleAttr should be 5 characters max");
    }));
    it("should validate inclusion", () => __awaiter(void 0, void 0, void 0, function* () {
        const failure = yield sampleClass.validateInclusion({ sampleAttr: "not-included" });
        const success = yield sampleClass.validateInclusion({ sampleAttr: "included" });
        expect(success).toBe(true);
        expect(failure).toBe("Inclusion error: sampleAttr is not a valid argument");
    }));
    it("should validate if is a URL", () => __awaiter(void 0, void 0, void 0, function* () {
        const failure = yield sampleClass.validateURL({ sampleAttr: "not-URL" });
        const success = yield sampleClass.validateURL({ sampleAttr: "https://www.google.com" });
        expect(success).toBe(true);
        expect(failure).toBe("URL validation error: sampleAttr is not an URL");
    }));
    it("should validate range", () => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield sampleClass.validateRange({ sampleAttr: 0 });
        expect(result).toBe("Range validation error: sampleAttr must be between 1 and 100");
        result = yield sampleClass.validateRange({ sampleAttr: 101 });
        expect(result).toBe("Range validation error: sampleAttr must be between 1 and 100");
        result = yield sampleClass.validateRange({ sampleAttr: 1 });
        expect(result).toBe(true);
        result = yield sampleClass.validateRange({ sampleAttr: 100 });
        expect(result).toBe(true);
    }));
    it("should execute custom validation", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield sampleClass.validateCustom({ sampleAttr: "raise Error" });
        expect(result).toBe("raise Error");
    }));
    it("should validate is is numeric", () => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield sampleClass.validateNumeric({ sampleAttr: "Hello world" });
        expect(result).toBe("Numeric validation error: sampleAttr should be a number");
        result = yield sampleClass.validateNumeric({ sampleAttr: "01 Hello world" });
        expect(result).toBe("Numeric validation error: sampleAttr should be a number");
        result = yield sampleClass.validateNumeric({ sampleAttr: "1" });
        expect(result).toBe(true);
        result = yield sampleClass.validateNumeric({ sampleAttr: "128732480297405872340587234" });
        expect(result).toBe(true);
    }));
});
