"use strict";
import { Document, model, Schema } from "mongoose";
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
import MongooseIdValidator from "mongoose-id-validator";
import { OmitOverride } from "../baseInterfaces";
import { accessibleRecordsPlugin } from "@casl/mongoose";

export type System = {
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
}


export type SystemCreate = OmitOverride<System, "_id">;
export type SystemUpdate = System;
export type SystemDelete = Pick<System, "_id">;

export type SystemDocument = Document & OmitOverride<System, "_id"> & {
  _id: any;
}

const System: Schema = new Schema<System>(
  {
    length: {
      type: Number
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);
System.plugin(MongooseIdValidator);
System.plugin(accessibleRecordsPlugin);
export const system = model<SystemDocument>(
  "System",
  System
);
