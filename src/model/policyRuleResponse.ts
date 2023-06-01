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

import { RequestFile } from "./models";
import { ContractResponse } from "./contractResponse";

export class PolicyRuleResponse {
  "id": string;
  "createdAt": Date;
  "type": string;
  "functionName"?: string;
  "contract"?: ContractResponse;
  "object": string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "string",
    },
    {
      name: "createdAt",
      baseName: "created_at",
      type: "Date",
    },
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "functionName",
      baseName: "function_name",
      type: "string",
    },
    {
      name: "contract",
      baseName: "contract",
      type: "ContractResponse",
    },
    {
      name: "object",
      baseName: "object",
      type: "string",
    },
  ];

  static getAttributeTypeMap() {
    return PolicyRuleResponse.attributeTypeMap;
  }
}