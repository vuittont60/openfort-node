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

import { Abi } from '../models/Abi';
import { HttpFile } from '../http/http';

export class UpdateContractRequest {
    /**
    * Specifies the name of the contract (Only for display purposes).
    */
    'name'?: string;
    /**
    * Specifies the chain ID of the contract.
    */
    'chainId'?: number;
    /**
    * Specifies whether to delete the contract.
    */
    'deleted'?: boolean;
    /**
    * Specifies the address of the contract.
    */
    'address'?: string;
    /**
    * Specifies the ABI of the contract.
    */
    'abi'?: Array<Abi>;
    /**
    * Specifies whether to verify the contract publicly.
    */
    'publicVerification'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "abi",
            "baseName": "abi",
            "type": "Array<Abi>",
            "format": ""
        },
        {
            "name": "publicVerification",
            "baseName": "publicVerification",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateContractRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

