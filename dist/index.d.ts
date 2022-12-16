import { AttrToValidate } from "./types";
export declare function validate<T>(validate: AttrToValidate<T>): any;
export declare class SimpleAsyncValidateConfig {
    static onFailure: (error: string) => any;
}
export declare type PayloadValidation<T> = AttrToValidate<T>;
