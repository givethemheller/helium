export * from './boatApi';
import { BoatApi } from './boatApi';
export * from './partApi';
import { PartApi } from './partApi';
export * from './serviceApi';
import { ServiceApi } from './serviceApi';
export * from './systemApi';
import { SystemApi } from './systemApi';
export * from './toolApi';
import { ToolApi } from './toolApi';
export * from './userApi';
import { UserApi } from './userApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [BoatApi, PartApi, ServiceApi, SystemApi, ToolApi, UserApi];
