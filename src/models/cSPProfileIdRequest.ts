/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Request to get the Id of the CSP profile. */
export interface CSPProfileIdRequest {
  /** CSP Profile ID in which service will be deployed. */
  cspProfileId?: string;
}

export const cSPProfileIdRequestSchema: Schema<CSPProfileIdRequest> = object({
  cspProfileId: ['cspProfileId', optional(string())],
});