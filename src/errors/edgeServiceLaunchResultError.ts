/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of EdgeServiceLaunchResult
 */
interface EdgeServiceLaunchResult {
  code?: string;
  message?: string;
  remedyMessage?: string;
}

export class EdgeServiceLaunchResultError extends ApiError<EdgeServiceLaunchResult> {}
