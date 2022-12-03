export type Validations = {
    nullable?: boolean,
    blank?: boolean,
    minLength?: number,
    maxLength?: number,
    range?: { min: number, max: number }
    in?: any[],
    isURL?: boolean,
    custom?: (value: unknown) => Promise<boolean>;
    isNumeric?: boolean,
    isUUID?: boolean
}

export type AttrToValidate<T> = {
    [key in keyof T]: Validations
}
