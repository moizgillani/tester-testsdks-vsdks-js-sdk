/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of DeviceLocationResult
 */
interface DeviceLocationResult {
  errorCode: string;
  errorMessage: string;
}

export class DeviceLocationResultError extends ApiError<DeviceLocationResult> {}
