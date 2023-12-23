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

import { Interaction } from '../models/Interaction';
import { HttpFile } from '../http/http';

export class CreateTransactionIntentRequest {
    /**
    * The chain ID.
    */
    'chainId': number;
    /**
    * The player ID (starts with pla_).
    */
    'player'?: string;
    /**
    * The account ID (starts with acc_ or dac_).
    */
    'account'?: string;
    /**
    * The policy ID (starts with pol_).
    */
    'policy'?: string;
    /**
    * If no account exists for a given player, create one with this address.
    */
    'externalOwnerAddress'?: string;
    /**
    * Whether the transactionIntent is optimistic (resolve before it arrives on chain) or not.
    */
    'optimistic': boolean;
    /**
    * Specify the number of blocks after the block with transaction to be assured that transaction is in block
    */
    'confirmationBlocks'?: number;
    'interactions': Array<Interaction>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalOwnerAddress",
            "baseName": "externalOwnerAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "optimistic",
            "baseName": "optimistic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "confirmationBlocks",
            "baseName": "confirmationBlocks",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "interactions",
            "baseName": "interactions",
            "type": "Array<Interaction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateTransactionIntentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

