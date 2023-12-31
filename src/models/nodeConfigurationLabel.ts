/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface NodeConfigurationLabel {
  placement?: string;
}

export const nodeConfigurationLabelSchema: Schema<NodeConfigurationLabel> = object(
  { placement: ['placement', optional(string())] }
);
