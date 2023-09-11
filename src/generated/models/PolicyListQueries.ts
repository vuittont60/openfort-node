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

import { PolicyResponseExpandable } from '../models/PolicyResponseExpandable';
import { SortOrder } from '../models/SortOrder';
import { HttpFile } from '../http/http';

export class PolicyListQueries {
    /**
    * Specifies the maximum number of records to return.
    */
    'limit'?: number;
    /**
    * Specifies the offset for the first records to return.
    */
    'skip'?: number;
    'order'?: SortOrder;
    /**
    * Specifies the fields to expand in the response.
    */
    'expand'?: Array<PolicyResponseExpandable>;
    /**
    * Specifies the name of the policy.
    */
    'name'?: string;
    /**
    * Specifies whether to include deleted contracts.
    */
    'deleted'?: boolean;
    /**
    * The chain ID of the policy.
    */
    'chainId'?: number;

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
            "name": "expand",
            "baseName": "expand",
            "type": "Array<PolicyResponseExpandable>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PolicyListQueries.attributeTypeMap;
    }

    public constructor() {
    }
}



