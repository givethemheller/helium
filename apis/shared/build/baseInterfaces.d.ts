import { User } from "./models/User";
/**
 * @tsoaModel
 */
export declare type OmitOverride<T, K> = Pick<T, Exclude<keyof T, K>>;
export interface Pagination {
    page: number;
    count: number;
}
export interface StandardResponse {
    data?: any;
    error?: CustomError;
}
export interface CustomError {
    rawError: any;
    userMessage?: string;
    code: number;
}
export declare type CustomWebToken = string;
export declare type CustomWebTokenContents = {
    scopes: string[];
};
export declare type UserAuthorization = {
    owner: User;
};
export declare class ApiError extends Error {
    private status;
    constructor(name: string, status: number, message?: string);
    logger(): void;
}
