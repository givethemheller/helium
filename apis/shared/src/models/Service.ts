"use strict";
import { Document, model, Schema } from "mongoose";
// tslint:disable-next-line: no-implicit-dependencies
// tslint:disable-next-line: no-var-requires
import MongooseIdValidator from "mongoose-id-validator";
import { OmitOverride } from "../baseInterfaces";
import { accessibleRecordsPlugin } from "@casl/mongoose";

export type Service = {
  /**
   * The name of the Service
   */
  name: string;
  /**
   * Description of the service
   */
  description: string;
  steps: string[];
  /**
   * Systems the Service is affecting
   */
  systems: string[];
  /**
   * parts being affected by the service
   */
  partsServiced: string[];
  newParts: string[];
  _id: string;
}


export type ServiceCreate = OmitOverride<Service, "_id">;
export type ServiceUpdate = Service;
export type ServiceDelete = Pick<Service, "_id">;

export type ServiceDocument = Document & OmitOverride<Service, "_id"> & {
  _id: any;
}

const Service: Schema = new Schema<Service>(
  {
    length: {
      type: Number
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);
Service.plugin(MongooseIdValidator);
Service.plugin(accessibleRecordsPlugin);
export const service = model<ServiceDocument>(
  "Service",
  Service
);
