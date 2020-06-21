"use strict";
import { Document, model, Schema } from "mongoose";
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
import MongooseIdValidator from "mongoose-id-validator";
import { OmitOverride } from "../baseInterfaces";
import { accessibleRecordsPlugin } from "@casl/mongoose";

export type Tool = {
  /**
   * The name of the Tool
   */
  name: string;
  /**
   * description of the Tool
   */
  description: string;
  _id: string;
}


export type ToolCreate = OmitOverride<Tool, "_id">;
export type ToolUpdate = Tool;
export type ToolDelete = Pick<Tool, "_id">;

export type ToolDocument = Document & OmitOverride<Tool, "_id"> & {
  _id: any;
}

const Tool: Schema = new Schema<Tool>(
  {
    length: {
      type: Number
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);
Tool.plugin(MongooseIdValidator);
Tool.plugin(accessibleRecordsPlugin);
export const tool = model<ToolDocument>(
  "Tool",
  Tool
);
