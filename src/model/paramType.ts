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

export class ParamType {
  "name": string;
  "type": string;
  "baseType": string;
  "indexed": boolean;
  "components": Array<ParamType>;
  "arrayLength": number;
  "arrayChildren": ParamType;
  "isParamType": boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
    },
    {
      name: "type",
      baseName: "type",
      type: "string",
    },
    {
      name: "baseType",
      baseName: "baseType",
      type: "string",
    },
    {
      name: "indexed",
      baseName: "indexed",
      type: "boolean",
    },
    {
      name: "components",
      baseName: "components",
      type: "Array<ParamType>",
    },
    {
      name: "arrayLength",
      baseName: "arrayLength",
      type: "number",
    },
    {
      name: "arrayChildren",
      baseName: "arrayChildren",
      type: "ParamType",
    },
    {
      name: "isParamType",
      baseName: "_isParamType",
      type: "boolean",
    },
  ];

  static getAttributeTypeMap() {
    return ParamType.attributeTypeMap;
  }
}