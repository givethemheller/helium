import { Document } from "mongoose";
import { OmitOverride } from "../baseInterfaces";
export declare type Tool = {
    /**
     * The name of the Tool
     */
    name: string;
    /**
     * description of the Tool
     */
    description: string;
    _id: string;
};
export declare type ToolCreate = OmitOverride<Tool, "_id">;
export declare type ToolUpdate = Tool;
export declare type ToolDelete = Pick<Tool, "_id">;
export declare type ToolDocument = Document & OmitOverride<Tool, "_id"> & {
    _id: any;
};
export declare const tool: import("mongoose").Model<ToolDocument, {}>;
