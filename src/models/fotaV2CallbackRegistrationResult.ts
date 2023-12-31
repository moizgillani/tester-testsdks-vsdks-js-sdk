/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Callback listener URL. */
export interface FotaV2CallbackRegistrationResult {
  /** Callback URL. */
  url?: string;
}

export const fotaV2CallbackRegistrationResultSchema: Schema<FotaV2CallbackRegistrationResult> = object(
  { url: ['url', optional(string())] }
);
