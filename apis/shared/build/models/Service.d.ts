import { Document } from "mongoose";
import { OmitOverride } from "../baseInterfaces";
export declare type Service = {
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
};
export declare type ServiceCreate = OmitOverride<Service, "_id">;
export declare type ServiceUpdate = Service;
export declare type ServiceDelete = Pick<Service, "_id">;
export declare type ServiceDocument = Document & OmitOverride<Service, "_id"> & {
    _id: any;
};
export declare const service: import("mongoose").Model<ServiceDocument, {}>;
