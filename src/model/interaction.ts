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

export class Interaction {
  "contract": string | null;
  "functionName": string;
  "functionArgs": Array<any>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "contract",
      baseName: "contract",
      type: "string",
    },
    {
      name: "functionName",
      baseName: "function_name",
      type: "string",
    },
    {
      name: "functionArgs",
      baseName: "function_args",
      type: "Array<any>",
    },
  ];

  static getAttributeTypeMap() {
    return Interaction.attributeTypeMap;
  }
}
