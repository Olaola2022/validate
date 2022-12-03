export declare const validateMinLength: (name: string, attr: unknown, minLength: number) => void;
export declare const validateMaxLength: (name: string, attr: unknown, maxLength: number) => void;
export declare const validateInclusion: <T>(name: string, attr: T, mustBeIn: T[]) => void;
export declare const validateBlank: (name: string, attr: unknown) => void;
export declare const validateURL: (name: string, attr: unknown) => void;
export declare const validateCustom: (name: string, attr: unknown, callback: (v: unknown) => Promise<boolean>) => Promise<void>;
export declare const validateRange: (name: string, attr: unknown, between: {
    min: number;
    max: number;
}) => void;
export declare const validateNumeric: (name: string, attr: unknown) => void;
export declare const validateUUID: (name: string, attr: unknown) => void;
