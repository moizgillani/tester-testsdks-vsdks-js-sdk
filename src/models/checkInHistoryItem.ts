/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Check-in history for a device. */
export interface CheckInHistoryItem {
  /** Device IMEI. */
  deviceId: string;
  /** Type of client. */
  clientType: string;
  result: string;
  failureType: string;
  timeCompleted: string;
}

export const checkInHistoryItemSchema: Schema<CheckInHistoryItem> = object({
  deviceId: ['deviceId', string()],
  clientType: ['clientType', string()],
  result: ['result', string()],
  failureType: ['failureType', string()],
  timeCompleted: ['timeCompleted', string()],
});