/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** Trigger attribute for when data percentage is over 90% used. */
export interface DataPercentage90TriggerAttribute {
  /** Key data percentage 90. */
  key?: string;
  /** DataPercentage90<br />True - Trigger on Data percentage is over 90% used<br />False - Do not trigger when over 90% used. */
  value?: boolean;
}

export const dataPercentage90TriggerAttributeSchema: Schema<DataPercentage90TriggerAttribute> = object(
  { key: ['key', optional(string())], value: ['value', optional(boolean())] }
);
