import { validate } from "@simple-async-validate";

export default class SampleClass {
    @validate({ sampleAttr: { blank: false} })
    async validateBlank(data: { sampleAttr: string }): Promise<boolean> {
        return true;
    }

    @validate({ sampleAttr: { minLength: 3 }})
    async validateMinLength(data: { sampleAttr: string }): Promise<boolean> {
        return true;
    }

    @validate({ sampleAttr: { maxLength: 5 }})
    async validateMaxLength(data: { sampleAttr: string }): Promise<boolean> {
        return true;
    }

    @validate({ sampleAttr: { in: ["included"] }})
    async validateInclusion(data: { sampleAttr: string }): Promise<boolean> {
        return true;
    }

    @validate({ sampleAttr: {isURL: true} })
    async validateURL(data: {sampleAttr: string}): Promise<boolean>{
        return true;
    }

    @validate({ sampleAttr: {range: {min: 1, max: 100}} })
    async validateRange(data: {sampleAttr: number}): Promise<boolean>{
        return true;
    }

    @validate({ sampleAttr: { custom: (value) => {throw Error(`${value}`);} } })
    async validateCustom(data: {sampleAttr: string}): Promise<boolean>{
        return true;
    }

    @validate({ sampleAttr: { isNumeric: true} } )
    async validateNumeric(data: {sampleAttr: string}): Promise<boolean>{
        return true;
    }
}
