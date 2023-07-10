/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

/** Trigger attribute for when data percentage is over 100% used. */
export interface DataPercentage100TriggerAttribute {
  /** Key data percentage 100. */
  key?: string;
  /** DataPercentage100<br />True - Trigger on Data percentage is over 100% used<br />False - Do not trigger when over 100% used. */
  value?: boolean;
}

export const dataPercentage100TriggerAttributeSchema: Schema<DataPercentage100TriggerAttribute> = object(
  { key: ['key', optional(string())], value: ['value', optional(boolean())] }
);