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

import { InvalidRequestError } from '../models/InvalidRequestError';
import { HttpFile } from '../http/http';

export class InvalidRequestErrorResponse {
    'error': InvalidRequestError;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "InvalidRequestError",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvalidRequestErrorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

