/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AuthPlayerResponse } from '../models/AuthPlayerResponse';
import { ResponseTypeLIST } from '../models/ResponseTypeLIST';
import { HttpFile } from '../http/http';

export class AuthPlayerListResponse {
    'object': ResponseTypeLIST;
    'url': string;
    'data': Array<AuthPlayerResponse>;
    'start': number;
    'end': number;
    'total': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "ResponseTypeLIST",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AuthPlayerResponse>",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "double"
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "double"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return AuthPlayerListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



