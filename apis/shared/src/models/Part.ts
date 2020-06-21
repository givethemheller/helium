"use strict";
import { Document, model, Schema } from "mongoose";
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
import MongooseIdValidator from "mongoose-id-validator";
import { OmitOverride } from "../baseInterfaces";
import { accessibleRecordsPlugin } from "@casl/mongoose";

export type Part = {
  /**
   * The name of the part
   */
  name: string;
  /**
   * Systems the part can be used in
   */
  system: string[];
  _id: string;
}


export type PartCreate = OmitOverride<Part, "_id">;
export type PartUpdate = Part;
export type PartDelete = Pick<Part, "_id">;

export type PartDocument = Document & OmitOverride<Part, "_id"> & {
  _id: any;
}

const Part: Schema = new Schema<Part>(
  {
    length: {
      type: Number
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);
Part.plugin(MongooseIdValidator);
Part.plugin(accessibleRecordsPlugin);
export const part = model<PartDocument>(
  "Part",
  Part
);
