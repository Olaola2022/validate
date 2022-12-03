import { AttrToValidate, Validations } from "./types";
import { ValidationError } from "./validationError";
import * as _ from "./validations";

export function validate<T>( validate: AttrToValidate<T> ): any {
    return <U>(target: U, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
       
        descriptor.value = async function(...args: any[]) {
            return await runValidations(validate, ...args)
                .then( () => originalMethod.apply(this, args) )
                .catch( (error: ValidationError) => {
                    return error.message;
                });
        };
        return descriptor;
    };
}

export const runValidations = async <T>(validations: AttrToValidate<T>, ...args: any[]): Promise<boolean> => {
    for (const key of (Object.keys(validations) as Array<keyof T>)) {
        const payload = args.find( arg => Object.keys(arg).includes(key as string));
        const attrName = key as string;
        const validation = validations[key];
        if (!payload && validation.nullable === true) continue;
        if (!payload && !validation.nullable) throw new ValidationError(`Presence error: ${attrName} should be present`);
        const attrValue = payload[key];
        if (!attrValue && validation.nullable === false) throw new ValidationError(`Presence error: ${attrName} should be present`);
        if (validation.blank === false) _.validateBlank(attrName, attrValue);
        if (validation.in) _.validateInclusion(attrName, attrValue, validation.in);
        if (validation.minLength) _.validateMinLength(attrName, attrValue, validation.minLength);
        if (validation.maxLength) _.validateMaxLength(attrName, attrValue, validation.maxLength);
        if (validation.isURL) _.validateURL(attrName, attrValue);
        if (validation.range) _.validateRange(attrName, attrValue, validation.range);
        if (validation.isUUID) _.validateUUID(attrName, attrValue);
        if (validation.custom) await _.validateCustom(attrName, attrValue, validation.custom);
        if (validation.isNumeric) _.validateNumeric(attrName, attrValue);
    }
    return true;
};