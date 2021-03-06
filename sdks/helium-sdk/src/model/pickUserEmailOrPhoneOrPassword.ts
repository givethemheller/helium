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

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickUserEmailOrPhoneOrPassword {
    /**
    * Email for the user
    */
    'email'?: string;
    /**
    * the phone number of the user that can be used for phone based  authentication
    */
    'phone'?: number;
    /**
    * The users password, encrypted
    */
    'password'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "number"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PickUserEmailOrPhoneOrPassword.attributeTypeMap;
    }
}

