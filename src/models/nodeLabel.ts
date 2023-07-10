/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface NodeLabel {
  placement?: string;
}

export const nodeLabelSchema: Schema<NodeLabel> = object({
  placement: ['placement', optional(string())],
});
