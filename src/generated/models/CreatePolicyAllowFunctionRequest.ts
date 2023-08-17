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

import { PolicyRuleType } from '../models/PolicyRuleType';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { HttpFile } from '../http/http';

export class CreatePolicyAllowFunctionRequest {
    'type': PolicyRuleType;
    'functionName': string | null;
    'contract': string | null;
    'gasLimit'?: string;
    'countLimit'?: number;
    'timeIntervalType'?: TimeIntervalType;
    'timeIntervalValue'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PolicyRuleType",
            "format": ""
        },
        {
            "name": "functionName",
            "baseName": "functionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string",
            "format": ""
        },
        {
            "name": "gasLimit",
            "baseName": "gasLimit",
            "type": "string",
            "format": ""
        },
        {
            "name": "countLimit",
            "baseName": "countLimit",
            "type": "number",
            "format": "double"
        },
        {
            "name": "timeIntervalType",
            "baseName": "timeIntervalType",
            "type": "TimeIntervalType",
            "format": ""
        },
        {
            "name": "timeIntervalValue",
            "baseName": "timeIntervalValue",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return CreatePolicyAllowFunctionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



