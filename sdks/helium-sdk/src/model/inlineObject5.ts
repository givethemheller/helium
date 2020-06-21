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

export class InlineObject5 {
    'conditions': { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return InlineObject5.attributeTypeMap;
    }
}

