/**
 * @helium/ts-tsoa-api
 * Helium API with TSOA generator and openAPI sdk generator
 *
 * The version of the OpenAPI document: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

export class BoatDimensionData {
    /**
    * Shortest distance from headstay to the clew of the jib
    */
    'LP': number;
    /**
    * Foot length of the mainsail
    */
    'E': number;
    /**
    * Luff length of the mainsail
    */
    'P': number;
    /**
    * Base of staysail triangle
    */
    'j2': number;
    /**
    * Base of the foretriangle measured from the front of the mast to the intersection of the forestay and deck
    */
    'J': number;
    /**
    * Height of staysail halyard above deck
    */
    'i2': number;
    /**
    * Height of the foretriangle measured from the top of the highest sheave to the sheerline
    */
    'I': number;
    /**
    * Beam Waterline - widest beam of boat at the waterline
    */
    'BWL': number;
    /**
    * Beam Maximum - width of the boat at the widest point
    */
    'BMX': number;
    /**
    * Design Waterline -theoretical waterline length of boat as opposed to LWL, which is actual waterline length
    */
    'DWL': number;
    /**
    * Length Waterline - length of waterline of the boat
    */
    'LWL': number;
    /**
    * Length Overall - overall tip-to-tip length of the boat
    */
    'LOA': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LP",
            "baseName": "LP",
            "type": "number"
        },
        {
            "name": "E",
            "baseName": "E",
            "type": "number"
        },
        {
            "name": "P",
            "baseName": "P",
            "type": "number"
        },
        {
            "name": "j2",
            "baseName": "J2",
            "type": "number"
        },
        {
            "name": "J",
            "baseName": "J",
            "type": "number"
        },
        {
            "name": "i2",
            "baseName": "I2",
            "type": "number"
        },
        {
            "name": "I",
            "baseName": "I",
            "type": "number"
        },
        {
            "name": "BWL",
            "baseName": "BWL",
            "type": "number"
        },
        {
            "name": "BMX",
            "baseName": "BMX",
            "type": "number"
        },
        {
            "name": "DWL",
            "baseName": "DWL",
            "type": "number"
        },
        {
            "name": "LWL",
            "baseName": "LWL",
            "type": "number"
        },
        {
            "name": "LOA",
            "baseName": "LOA",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BoatDimensionData.attributeTypeMap;
    }
}

