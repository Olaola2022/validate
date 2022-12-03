import { ValidationError } from "./validationError";

export const validateMinLength = (name: string, attr: unknown, minLength: number): void => {
    if ((attr as string).length < minLength) 
        throw new ValidationError(`Length error: ${name} should be ${minLength} characters at least`);
};

export const validateMaxLength = (name: string, attr: unknown, maxLength: number): void => {
    if ((attr as string).length > maxLength)
        throw new ValidationError(`Length error: ${name} should be ${maxLength} characters max`);
};

export const validateInclusion = <T>(name: string, attr: T, mustBeIn: T[]): void => {
    if (!mustBeIn.includes(attr))
        throw new ValidationError(`Inclusion error: ${name} is not a valid argument`);
};

export const validateBlank = (name: string, attr: unknown): void => {
    if ((attr as []).length === 0)
        throw new ValidationError(`Blank error: ${name} could not be blank`);
};

export const validateURL = (name: string, attr: unknown): void => {
    try {
        new URL(attr as string);
    } catch (_) {
        throw new ValidationError(`URL validation error: ${name} is not an URL`);
    }
};

export const validateCustom = async (name: string, attr: unknown, callback: (v: unknown) => Promise<boolean>): Promise<void> => {
    const result = await callback(attr);
    if (!result)
        throw new ValidationError(`Custom validation error: ${name} is invalid`);
};

export const validateRange = (name: string, attr: unknown, between: {min: number, max: number}): void => {
    const number = attr as number;
    if ( !(between.min <= number && number <= between.max) ){
        throw new ValidationError(`Range validation error: ${name} must be between ${between.min} and ${between.max}`);
    }
};

export const validateNumeric = (name: string, attr: unknown): void => {
    if (typeof attr === "number") return;
    if (typeof attr != "string") throw new ValidationError(`Numeric validation error: ${name} should be a string number`);  
    if (!(/^-?\d+$/.test(attr)))
        throw new ValidationError(`Numeric validation error: ${name} should be a number`);
};

export const validateUUID = (name: string, attr: unknown): void => {
    if (typeof attr != "string") throw new ValidationError(`UUID validation error: ${name} should be a string`);  
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if (!regexExp.test(attr))
        throw new ValidationError(`UUID validation error: ${name} should be a UUID`);
};