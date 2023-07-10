/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, number, object, Schema, string } from '../schema';

/** A list of license cancellation candidate devices. */
export interface V2ListOfLicensesToRemove {
  /** Cancellation candidate devices count. */
  count: number;
  /** Flag to indicat more devices. */
  hasMoreData: boolean;
  /** Last update time. */
  updateTime: string;
  /** Device IMEI list. */
  deviceList: string[];
}

export const v2ListOfLicensesToRemoveSchema: Schema<V2ListOfLicensesToRemove> = object(
  {
    count: ['count', number()],
    hasMoreData: ['hasMoreData', boolean()],
    updateTime: ['updateTime', string()],
    deviceList: ['deviceList', array(string())],
  }
);
