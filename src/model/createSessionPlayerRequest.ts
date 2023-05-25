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

export class CreateSessionPlayerRequest {
  "address": string;
  "policy"?: string;
  "chainId": number;
  "validUntil": number;
  "validAfter": number;
  "whitelist"?: Array<string>;
  "limit"?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "address",
      baseName: "address",
      type: "string",
    },
    {
      name: "policy",
      baseName: "policy",
      type: "string",
    },
    {
      name: "chainId",
      baseName: "chain_id",
      type: "number",
    },
    {
      name: "validUntil",
      baseName: "valid_until",
      type: "number",
    },
    {
      name: "validAfter",
      baseName: "valid_after",
      type: "number",
    },
    {
      name: "whitelist",
      baseName: "whitelist",
      type: "Array<string>",
    },
    {
      name: "limit",
      baseName: "limit",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return CreateSessionPlayerRequest.attributeTypeMap;
  }
}
