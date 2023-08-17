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

import { SortOrder } from '../models/SortOrder';
import { HttpFile } from '../http/http';

export class SessionListQueries {
    'limit'?: number;
    'skip'?: number;
    'order'?: SortOrder;
    'player': string;
    'expand'?: Array<SessionListQueriesExpandEnum>;
    'address'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "double"
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number",
            "format": "double"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortOrder",
            "format": ""
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "string",
            "format": ""
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "Array<SessionListQueriesExpandEnum>",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SessionListQueries.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SessionListQueriesExpandEnum = "transactionIntents" ;
