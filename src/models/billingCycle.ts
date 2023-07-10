/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface BillingCycle {
  year?: string;
  month?: string;
}

export const billingCycleSchema: Schema<BillingCycle> = object({
  year: ['year', optional(string())],
  month: ['month', optional(string())],
});
