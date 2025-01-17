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

import { OAuthProviderGOOGLE } from '../models/OAuthProviderGOOGLE';
import { HttpFile } from '../http/http';

/**
* Google oauth configuration
*/
export class GoogleOAuthConfig {
    /**
    * Enable OAuth provider.
    */
    'enabled': boolean;
    'provider': OAuthProviderGOOGLE;
    /**
    * Google API client ID.
    */
    'clientId': string;
    /**
    * Google API client secret.
    */
    'clientSecret': string;
    /**
    * The URI to redirect to after completing the auth request. You can use Openfort redirect URL: https://openfort.xyz/iam/v1/oauth/google/callback
    */
    'redirectUri': string;

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
            "type": "OAuthProviderGOOGLE",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "redirectUri",
            "baseName": "redirectUri",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GoogleOAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}



