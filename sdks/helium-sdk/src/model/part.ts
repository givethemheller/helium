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

export class Part {
    'id': string;
    /**
    * Systems the part can be used in
    */
    'system': Array<string>;
    /**
    * The name of the part
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string"
        },
        {
            "name": "system",
            "baseName": "system",
            "type": "Array<string>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Part.attributeTypeMap;
    }
}

