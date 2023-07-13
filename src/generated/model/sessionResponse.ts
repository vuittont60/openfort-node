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
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';

export class SessionResponse {
    'id': string;
    'object': string;
    'created_at': number;
    'updated_at': number;
    'is_active'?: boolean;
    'address': string;
    'valid_after'?: string;
    'valid_until'?: string;
    'whitelist'?: Array<string>;
    'limit'?: number;
    'next_action': object | null;
    'transaction_intents': Array<PolicyResponseTransactionIntentsInner> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "created_at",
            "baseName": "created_at",
            "type": "number"
        },
        {
            "name": "updated_at",
            "baseName": "updated_at",
            "type": "number"
        },
        {
            "name": "is_active",
            "baseName": "is_active",
            "type": "boolean"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "valid_after",
            "baseName": "valid_after",
            "type": "string"
        },
        {
            "name": "valid_until",
            "baseName": "valid_until",
            "type": "string"
        },
        {
            "name": "whitelist",
            "baseName": "whitelist",
            "type": "Array<string>"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "next_action",
            "baseName": "next_action",
            "type": "object"
        },
        {
            "name": "transaction_intents",
            "baseName": "transaction_intents",
            "type": "Array<PolicyResponseTransactionIntentsInner>"
        }    ];

    static getAttributeTypeMap() {
        return SessionResponse.attributeTypeMap;
    }
}

