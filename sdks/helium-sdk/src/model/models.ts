export * from './boat';
export * from './boatCreate';
export * from './boatDimensionData';
export * from './boatHardware';
export * from './gROUPS';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './omitOverrideBoatId';
export * from './omitOverridePartId';
export * from './omitOverrideServiceId';
export * from './omitOverrideSystemId';
export * from './omitOverrideToolId';
export * from './part';
export * from './partCreate';
export * from './pickBoatExcludeKeyofBoatId';
export * from './pickPartExcludeKeyofPartId';
export * from './pickServiceExcludeKeyofServiceId';
export * from './pickSystemExcludeKeyofSystemId';
export * from './pickToolExcludeKeyofToolId';
export * from './pickUserEmailOrPhoneOrPassword';
export * from './service';
export * from './serviceCreate';
export * from './system';
export * from './systemCreate';
export * from './tool';
export * from './toolCreate';
export * from './user';
export * from './userCreate';
export * from './userGoogleProvider';

import localVarRequest = require('request');

import { Boat } from './boat';
import { BoatCreate } from './boatCreate';
import { BoatDimensionData } from './boatDimensionData';
import { BoatHardware } from './boatHardware';
import { GROUPS } from './gROUPS';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { OmitOverrideBoatId } from './omitOverrideBoatId';
import { OmitOverridePartId } from './omitOverridePartId';
import { OmitOverrideServiceId } from './omitOverrideServiceId';
import { OmitOverrideSystemId } from './omitOverrideSystemId';
import { OmitOverrideToolId } from './omitOverrideToolId';
import { Part } from './part';
import { PartCreate } from './partCreate';
import { PickBoatExcludeKeyofBoatId } from './pickBoatExcludeKeyofBoatId';
import { PickPartExcludeKeyofPartId } from './pickPartExcludeKeyofPartId';
import { PickServiceExcludeKeyofServiceId } from './pickServiceExcludeKeyofServiceId';
import { PickSystemExcludeKeyofSystemId } from './pickSystemExcludeKeyofSystemId';
import { PickToolExcludeKeyofToolId } from './pickToolExcludeKeyofToolId';
import { PickUserEmailOrPhoneOrPassword } from './pickUserEmailOrPhoneOrPassword';
import { Service } from './service';
import { ServiceCreate } from './serviceCreate';
import { System } from './system';
import { SystemCreate } from './systemCreate';
import { Tool } from './tool';
import { ToolCreate } from './toolCreate';
import { User } from './user';
import { UserCreate } from './userCreate';
import { UserGoogleProvider } from './userGoogleProvider';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "GROUPS": GROUPS,
}

let typeMap: {[index: string]: any} = {
    "Boat": Boat,
    "BoatCreate": BoatCreate,
    "BoatDimensionData": BoatDimensionData,
    "BoatHardware": BoatHardware,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "OmitOverrideBoatId": OmitOverrideBoatId,
    "OmitOverridePartId": OmitOverridePartId,
    "OmitOverrideServiceId": OmitOverrideServiceId,
    "OmitOverrideSystemId": OmitOverrideSystemId,
    "OmitOverrideToolId": OmitOverrideToolId,
    "Part": Part,
    "PartCreate": PartCreate,
    "PickBoatExcludeKeyofBoatId": PickBoatExcludeKeyofBoatId,
    "PickPartExcludeKeyofPartId": PickPartExcludeKeyofPartId,
    "PickServiceExcludeKeyofServiceId": PickServiceExcludeKeyofServiceId,
    "PickSystemExcludeKeyofSystemId": PickSystemExcludeKeyofSystemId,
    "PickToolExcludeKeyofToolId": PickToolExcludeKeyofToolId,
    "PickUserEmailOrPhoneOrPassword": PickUserEmailOrPhoneOrPassword,
    "Service": Service,
    "ServiceCreate": ServiceCreate,
    "System": System,
    "SystemCreate": SystemCreate,
    "Tool": Tool,
    "ToolCreate": ToolCreate,
    "User": User,
    "UserCreate": UserCreate,
    "UserGoogleProvider": UserGoogleProvider,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
