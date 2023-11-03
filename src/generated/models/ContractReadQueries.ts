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

import { HttpFile } from '../http/http';

export class ContractReadQueries {
    /**
    * The function name of the contract.
    */
    'functionName': string;
    /**
    * The function arguments of the contract.
    */
    'functionArgs'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "functionArgs",
            "baseName": "functionArgs",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContractReadQueries.attributeTypeMap;
    }

    public constructor() {
    }
}

