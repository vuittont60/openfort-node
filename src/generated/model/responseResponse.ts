/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { JsonValue } from './jsonValue';

export class ResponseResponse {
    'createdAt': Date;
    'blockNumber': number | null;
    'transactionHash': string | null;
    'gasUsed'?: number | null;
    'status'?: number | null;
    'logs'?: JsonValue | null;
    'to'?: string | null;
    'error'?: JsonValue | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "blockNumber",
            "baseName": "block_number",
            "type": "number"
        },
        {
            "name": "transactionHash",
            "baseName": "transaction_hash",
            "type": "string"
        },
        {
            "name": "gasUsed",
            "baseName": "gas_used",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "logs",
            "baseName": "logs",
            "type": "JsonValue"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "JsonValue"
        }    ];

    static getAttributeTypeMap() {
        return ResponseResponse.attributeTypeMap;
    }
}

