/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

/** Device IMEI list. */
export interface DeviceIMEI {
  /** Device IMEI list. */
  deviceList: string[];
}

export const deviceIMEISchema: Schema<DeviceIMEI> = object({
  deviceList: ['deviceList', array(string())],
});
