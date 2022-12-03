import { runValidations } from "./src/runner";
import { AttrToValidate } from "./src/types";
import { ValidationError } from "./src/validationError";

export function validate<T>( validate: AttrToValidate<T> ): any {
    return <U>(target: U, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
       
        descriptor.value = async function(...args: any[]) {
            return await runValidations(validate, ...args)
                .then( () => originalMethod.apply(this, args) )
                .catch( (error: ValidationError) => {
                    return SimpleAsyncValidateConfig.onFailure(error.message)
                });
        };
        return descriptor;
    };
}

export class SimpleAsyncValidateConfig {
    static onFailure: 
        (error: string) => any = (error: string) => error;
}

export type PayloadValidation<T> = AttrToValidate<T>;