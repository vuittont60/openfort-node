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

import { SponsorSchema } from '../models/SponsorSchema';
import { TimeIntervalType } from '../models/TimeIntervalType';
import { HttpFile } from '../http/http';

export class PolicyStrategyRequest {
    'sponsorSchema': SponsorSchema;
    'tokenContract'?: string;
    'tokenContractAmount'?: string;
    'gasLimit'?: string;
    'timeIntervalType'?: TimeIntervalType;
    'timeIntervalValue'?: number;
    'countLimit'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sponsorSchema",
            "baseName": "sponsorSchema",
            "type": "SponsorSchema",
            "format": ""
        },
        {
            "name": "tokenContract",
            "baseName": "tokenContract",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenContractAmount",
            "baseName": "tokenContractAmount",
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
            "name": "timeIntervalType",
            "baseName": "timeIntervalType",
            "type": "TimeIntervalType",
            "format": ""
        },
        {
            "name": "timeIntervalValue",
            "baseName": "timeIntervalValue",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "countLimit",
            "baseName": "countLimit",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PolicyStrategyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



