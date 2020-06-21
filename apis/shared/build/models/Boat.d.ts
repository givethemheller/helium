import { Document } from "mongoose";
import { OmitOverride } from "../baseInterfaces";
import { System } from "./System";
import { Part } from "./Part";
export declare type Boat = {
    owner: string;
    /**
     * The brand of the boat
     */
    brand: string;
    /**
     * The model of the boat
     */
    model: string;
    dimensionData?: {
        /**
         * Length Overall - overall tip-to-tip length of the boat
         */
        LOA: number;
        /**
         * Length Waterline - length of waterline of the boat
         */
        LWL: number;
        /**
         * Design Waterline -theoretical waterline length of boat as opposed to LWL, which is actual waterline length
         */
        DWL: number;
        /**
         * Beam Maximum - width of the boat at the widest point
         */
        BMX: number;
        /**
         * Beam Waterline - widest beam of boat at the waterline
         */
        BWL: number;
        /**
         * Height of the foretriangle measured from the top of the highest sheave to the sheerline
         */
        I: number;
        /**
         * 	Height of staysail halyard above deck
         */
        I2: number;
        /**
         * Base of the foretriangle measured from the front of the mast to the intersection of the forestay and deck
         */
        J: number;
        /**
         * Base of staysail triangle
         */
        J2: number;
        /**
         * Luff length of the mainsail
         */
        P: number;
        /**
         * Foot length of the mainsail
         */
        E: number;
        /**
         * 	Shortest distance from headstay to the clew of the jib
         */
        LP: number;
    };
    hardware?: {
        systems?: System[];
        parts?: Part[];
    }[];
    _id: string;
};
export declare type BoatCreate = OmitOverride<Boat, "_id">;
export declare type BoatUpdate = Boat;
export declare type BoatDelete = Pick<Boat, "_id">;
export declare type BoatDocument = Document & OmitOverride<Boat, "_id"> & {
    _id: any;
};
export declare const boat: import("mongoose").Model<BoatDocument, {}>;
