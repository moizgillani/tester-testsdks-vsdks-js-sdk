/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { AccountDeviceList, accountDeviceListSchema } from './accountDeviceList';

/** Request to delete a device request. */
export interface DeleteDevicesRequest {
  /** The Verizon billing account that the device group belongs to. An account name is usually numeric, and must include any leading zeros. */
  accountName?: string;
  /** A list of up to 100 devices that you want to delete, specified by device identifier. You only need to provide one identifier per device. */
  devicesToDelete?: AccountDeviceList[];
}

export const deleteDevicesRequestSchema: Schema<DeleteDevicesRequest> = object({
  accountName: ['accountName', optional(string())],
  devicesToDelete: [
    'devicesToDelete',
    optional(array(lazy(() => accountDeviceListSchema))),
  ],
});
