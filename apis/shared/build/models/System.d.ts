import { Document } from "mongoose";
import { OmitOverride } from "../baseInterfaces";
export declare type System = {
    /**
     * The name of the system
     */
    name: string;
    /**
     * Short summary of the system
     */
    summary: string;
    /**
     * A full description of the system
     */
    description: string;
    referencedParts: string[];
    _id: string;
};
export declare type SystemCreate = OmitOverride<System, "_id">;
export declare type SystemUpdate = System;
export declare type SystemDelete = Pick<System, "_id">;
export declare type SystemDocument = Document & OmitOverride<System, "_id"> & {
    _id: any;
};
export declare const system: import("mongoose").Model<SystemDocument, {}>;
