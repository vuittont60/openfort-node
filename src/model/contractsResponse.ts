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

export class ContractsResponse {
  "object": string;
  "url": string;
  "data": Array<ContractResponse>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "object",
      baseName: "object",
      type: "string",
    },
    {
      name: "url",
      baseName: "url",
      type: "string",
    },
    {
      name: "data",
      baseName: "data",
      type: "Array<ContractResponse>",
    },
  ];

  static getAttributeTypeMap() {
    return ContractsResponse.attributeTypeMap;
  }
}
