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

import { OAuthProviderPLAYFAB } from '../models/OAuthProviderPLAYFAB';
import { HttpFile } from '../http/http';

/**
* PlayFab oauth configuration
*/
export class PlayFabOAuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': OAuthProviderPLAYFAB;
    /**
    * Title ID of your Play Fab gaming service environment.
    */
    'titleId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OAuthProviderPLAYFAB",
            "format": ""
        },
        {
            "name": "titleId",
            "baseName": "titleId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayFabOAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



