import SampleClass from "./sampleClass";

describe("Validate decorator", () => {
    const sampleClass = new SampleClass();

    it("should validate blank", async() => {
        const failure = await sampleClass.validateBlank({sampleAttr: ""});
        const success = await sampleClass.validateBlank({sampleAttr: "hello world!"});
        expect(success).toBe(true);
        expect(failure).toBe("Blank error: sampleAttr could not be blank");
    });

    it("should validate min length", async() => {
        const failure = await sampleClass.validateMinLength({sampleAttr: "12"});
        const success = await sampleClass.validateMinLength({sampleAttr: "123"});
        expect(success).toBe(true);
        expect(failure).toBe("Length error: sampleAttr should be 3 characters at least");
    });

    it("should validate max length", async() => {
        const failure = await sampleClass.validateMaxLength({sampleAttr: "123456"});
        const success = await sampleClass.validateMaxLength({sampleAttr: "123"});
        expect(success).toBe(true);
        expect(failure).toBe("Length error: sampleAttr should be 5 characters max");
    });

    it("should validate inclusion", async() => {
        const failure = await sampleClass.validateInclusion({sampleAttr: "not-included"});
        const success = await sampleClass.validateInclusion({sampleAttr: "included"});
        expect(success).toBe(true);
        expect(failure).toBe("Inclusion error: sampleAttr is not a valid argument");
    });

    it("should validate if is a URL", async() => {
        const failure = await sampleClass.validateURL({sampleAttr: "not-URL"});
        const success = await sampleClass.validateURL({sampleAttr: "https://www.google.com"});
        expect(success).toBe(true);
        expect(failure).toBe("URL validation error: sampleAttr is not an URL");
    });

    it("should validate range", async() => {
        let result = await sampleClass.validateRange({sampleAttr: 0});
        expect(result).toBe("Range validation error: sampleAttr must be between 1 and 100");
        result = await sampleClass.validateRange({sampleAttr: 101});
        expect(result).toBe("Range validation error: sampleAttr must be between 1 and 100");
        result = await sampleClass.validateRange({sampleAttr: 1});
        expect(result).toBe(true);
        result = await sampleClass.validateRange({sampleAttr: 100});
        expect(result).toBe(true);
    });

    it("should execute custom validation", async() => {
        const result = await sampleClass.validateCustom({sampleAttr: "raise Error"});
        expect(result).toBe("raise Error");
    });

    it("should validate is is numeric", async() => {
        let result = await sampleClass.validateNumeric({sampleAttr: "Hello world"});
        expect(result).toBe("Numeric validation error: sampleAttr should be a number");
        result = await sampleClass.validateNumeric({sampleAttr: "01 Hello world"});
        expect(result).toBe("Numeric validation error: sampleAttr should be a number");
        result = await sampleClass.validateNumeric({sampleAttr: "1"});
        expect(result).toBe(true);
        result = await sampleClass.validateNumeric({sampleAttr: "128732480297405872340587234"});
        expect(result).toBe(true);
    });
})