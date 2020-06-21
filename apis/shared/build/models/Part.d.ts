import { Document } from "mongoose";
import { OmitOverride } from "../baseInterfaces";
export declare type Part = {
    /**
     * The name of the part
     */
    name: string;
    /**
     * Systems the part can be used in
     */
    system: string[];
    _id: string;
};
export declare type PartCreate = OmitOverride<Part, "_id">;
export declare type PartUpdate = Part;
export declare type PartDelete = Pick<Part, "_id">;
export declare type PartDocument = Document & OmitOverride<Part, "_id"> & {
    _id: any;
};
export declare const part: import("mongoose").Model<PartDocument, {}>;
