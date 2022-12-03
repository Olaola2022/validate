import { AttrToValidate } from "./types";
export declare const runValidations: <T>(validations: AttrToValidate<T>, ...args: any[]) => Promise<boolean>;
