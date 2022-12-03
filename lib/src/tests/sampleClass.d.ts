export default class SampleClass {
    validateBlank(data: {
        sampleAttr: string;
    }): Promise<boolean>;
    validateMinLength(data: {
        sampleAttr: string;
    }): Promise<boolean>;
    validateMaxLength(data: {
        sampleAttr: string;
    }): Promise<boolean>;
    validateInclusion(data: {
        sampleAttr: string;
    }): Promise<boolean>;
    validateURL(data: {
        sampleAttr: string;
    }): Promise<boolean>;
    validateRange(data: {
        sampleAttr: number;
    }): Promise<boolean>;
    validateCustom(data: {
        sampleAttr: string;
    }): Promise<boolean>;
    validateNumeric(data: {
        sampleAttr: string;
    }): Promise<boolean>;
}
