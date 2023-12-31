/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema } from '../schema';

/** Cancelation status. */
export interface FotaV3SuccessResult {
  /** True or false. */
  success: boolean;
}

export const fotaV3SuccessResultSchema: Schema<FotaV3SuccessResult> = object({
  success: ['success', boolean()],
});
