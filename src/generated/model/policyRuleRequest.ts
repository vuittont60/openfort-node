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
import { PolicySchema } from './policySchema';

export class PolicyRuleRequest {
    'type': PolicySchema;
    'functionName': string | null;
    'policy': string;
    'contract': string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PolicySchema"
        },
        {
            "name": "functionName",
            "baseName": "function_name",
            "type": "string"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string"
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PolicyRuleRequest.attributeTypeMap;
    }
}

export namespace PolicyRuleRequest {
}
