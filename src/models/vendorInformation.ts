/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface VendorInformation {
  /** ID of the vendor. */
  id: string;
  /** Name of the vendor. */
  name: string;
  /** Primary email of the vendor. */
  primaryEmail?: string;
  /** Secondary email of the vendor. */
  secondaryEmail?: string;
  /** Contact number of the vendor. */
  contactNumber?: string;
}

export const vendorInformationSchema: Schema<VendorInformation> = object({
  id: ['id', string()],
  name: ['name', string()],
  primaryEmail: ['primaryEmail', optional(string())],
  secondaryEmail: ['secondaryEmail', optional(string())],
  contactNumber: ['contactNumber', optional(string())],
});