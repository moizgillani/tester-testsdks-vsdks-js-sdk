/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface AccessKey {
  /** Access ID of the access key. */
  accessId?: string;
  /** Secret key of the access key. */
  secretKey?: string;
  /** Session token of the access key. */
  sessionToken?: string;
}

export const accessKeySchema: Schema<AccessKey> = object({
  accessId: ['accessId', optional(string())],
  secretKey: ['secretKey', optional(string())],
  sessionToken: ['sessionToken', optional(string())],
});
