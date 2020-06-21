import { Document, Model } from "mongoose";
import { Pagination } from "../baseInterfaces";
import { User } from "../models/User";
interface KeyPairs {
    [key: string]: any;
}
export declare type ArgsFromType<T> = {
    [P in keyof T]?: any;
};
declare type SortFromType<T> = KeyPairs & {
    [P in keyof T]: -1 | 1;
};
export declare function findOne<D, R>(model: Model<D & Document, {}>, conditions?: Array<ArgsFromType<D>> | false, id?: string | false, projection?: string, user?: User): Promise<R | null>;
export declare function findOneById<D, R>(model: Model<D & Document, {}>, id?: string | false, projection?: string, user?: User): Promise<R | null>;
export declare function findMany<D, R>(model: Model<D & Document, {}>, conditions?: Array<ArgsFromType<D>> | false, sort?: Array<SortFromType<D>> | false, paginate?: Pagination | false, projection?: string, user?: User): Promise<R[] | null>;
export declare function createDoc<D, R>(model: Model<D & Document, {}>, documents: ArgsFromType<D>, user: User): Promise<R>;
export declare function updateDoc<D, R>(model: Model<D & Document, {}>, id: string, updates: Array<ArgsFromType<D>>, user: User, projection?: string): Promise<R>;
export declare function deletDoc<D, R>(model: Model<D & Document, {}>, id: string, user: User): Promise<any>;
export {};
