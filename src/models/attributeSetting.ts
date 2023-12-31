/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import {
  AttributeIdentifierEnum,
  attributeIdentifierEnumSchema,
} from './attributeIdentifierEnum';
import { NumericalData, numericalDataSchema } from './numericalData';

/** Describes an attribute being observed and the frequency with which the attribute is being observed. */
export interface AttributeSetting {
  /** Attribute identifier. */
  name?: AttributeIdentifierEnum;
  /** Attribute value. */
  value?: string;
  /** Date and time request was created. */
  createdOn?: string;
  /** Is the attribute observable? */
  isObservable?: boolean;
  /** Is the attribute being observed? */
  isObserving?: boolean;
  /** Describes value and unit of time. */
  frequency?: NumericalData;
}

export const attributeSettingSchema: Schema<AttributeSetting> = object({
  name: ['name', optional(attributeIdentifierEnumSchema)],
  value: ['value', optional(string())],
  createdOn: ['createdOn', optional(string())],
  isObservable: ['isObservable', optional(boolean())],
  isObserving: ['isObserving', optional(boolean())],
  frequency: ['frequency', optional(lazy(() => numericalDataSchema))],
});
