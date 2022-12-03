import { AttrToValidate } from "./src/types";
export declare function validate<T>(validate: AttrToValidate<T>): any;
export declare class SimpleAsyncValidateConfig {
    static onFailure: (error: string) => any;
}
export type PayloadValidation<T> = AttrToValidate<T>;
