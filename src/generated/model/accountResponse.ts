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
import { PolicyResponseTransactionIntents } from './policyResponseTransactionIntents';

export class AccountResponse {
    'id': string;
    'object': string;
    'createdAt': Date;
    'address': string;
    'deployed': boolean;
    'custodial': boolean;
    'chainId': number;
    'transactionIntents'?: PolicyResponseTransactionIntents;

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
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "deployed",
            "baseName": "deployed",
            "type": "boolean"
        },
        {
            "name": "custodial",
            "baseName": "custodial",
            "type": "boolean"
        },
        {
            "name": "chainId",
            "baseName": "chain_id",
            "type": "number"
        },
        {
            "name": "transactionIntents",
            "baseName": "transaction_intents",
            "type": "PolicyResponseTransactionIntents"
        }    ];

    static getAttributeTypeMap() {
        return AccountResponse.attributeTypeMap;
    }
}
