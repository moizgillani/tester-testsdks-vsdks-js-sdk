/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  HyperPreciseLocationResultError,
} from '../errors/hyperPreciseLocationResultError';
import {
  BullseyeServiceRequest,
  bullseyeServiceRequestSchema,
} from '../models/bullseyeServiceRequest';
import {
  BullseyeServiceResult,
  bullseyeServiceResultSchema,
} from '../models/bullseyeServiceResult';
import { string } from '../schema';
import { BaseController } from './baseController';

export class DeviceServiceManagementController extends BaseController {
  /**
   * Gets the list of a status for hyper-precise location devices.
   *
   * @param imei          A unique identifier for a device.
   * @param accountNumber A unique identifier for an account.
   * @return Response from the API call
   */
  async getDeviceHyperPreciseStatus(
    imei: string,
    accountNumber: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BullseyeServiceResult>> {
    const req = this.createRequest('GET', '/devices/services');
    req.baseUrl('Hyper Precise Location');
    const mapped = req.prepareArgs({
      imei: [imei, string()],
      accountNumber: [accountNumber, string()],
    });
    req.query('imei', mapped.imei);
    req.query('accountNumber', mapped.accountNumber);
    req.throwOn(400, HyperPreciseLocationResultError, 'Bad request.');
    req.throwOn(401, HyperPreciseLocationResultError, 'Unauthorized request. Access token is missing or invalid.');
    req.throwOn(403, HyperPreciseLocationResultError, 'Forbidden request.');
    req.throwOn(404, HyperPreciseLocationResultError, 'Bad request. Not found.');
    req.throwOn(409, HyperPreciseLocationResultError, 'Bad request. Conflict state.');
    req.throwOn(500, HyperPreciseLocationResultError, 'Internal Server Error.');
    return req.callAsJson(bullseyeServiceResultSchema, requestOptions);
  }

  /**
   * Enable/disable hyper-precise service for a device.
   *
   * @param body         List of devices and hyper-precise required statuses.
   * @return Response from the API call
   */
  async updateDeviceHyperPreciseStatus(
    body: BullseyeServiceRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<BullseyeServiceResult>> {
    const req = this.createRequest('PUT', '/devices/services');
    req.baseUrl('Hyper Precise Location');
    const mapped = req.prepareArgs({
      body: [body, bullseyeServiceRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, HyperPreciseLocationResultError, 'Bad request.');
    req.throwOn(401, HyperPreciseLocationResultError, 'Unauthorized request. Access token is missing or invalid.');
    req.throwOn(403, HyperPreciseLocationResultError, 'Forbidden request.');
    req.throwOn(404, HyperPreciseLocationResultError, 'Bad request. Not found.');
    req.throwOn(409, HyperPreciseLocationResultError, 'Bad request. Conflict state.');
    req.throwOn(500, HyperPreciseLocationResultError, 'Internal Server Error.');
    return req.callAsJson(bullseyeServiceResultSchema, requestOptions);
  }
}
