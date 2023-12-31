/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  EdgeServiceLaunchResultError,
} from '../errors/edgeServiceLaunchResultError';
import {
  CreateServiceProfileRequest,
  createServiceProfileRequestSchema,
} from '../models/createServiceProfileRequest';
import {
  ServicesProfileRegistration,
  servicesProfileRegistrationSchema,
} from '../models/servicesProfileRegistration';
import {
  ServicesProfileRegistrationResult,
  servicesProfileRegistrationResultSchema,
} from '../models/servicesProfileRegistrationResult';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class ServiceLaunchProfilesController extends BaseController {
  /**
   * Creates a service profile that describes the resource requirements of a service.
   *
   * @param accountName  User account name.
   * @param body         Request for creation of a service profile.
   * @return Response from the API call
   */
  async createServiceProfile(
    accountName: string,
    body: CreateServiceProfileRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServicesProfileRegistration>> {
    const req = this.createRequest('POST', '/v1/service/profile');
    req.baseUrl('Services');
    const mapped = req.prepareArgs({
      accountName: [accountName, string()],
      body: [body, createServiceProfileRequestSchema],
    });
    req.header('AccountName', mapped.accountName);
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, EdgeServiceLaunchResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeServiceLaunchResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeServiceLaunchResultError, 'HTTP 500 Internal Server Error.');
    return req.callAsJson(servicesProfileRegistrationSchema, requestOptions);
  }

  /**
   * Update the definition of a service profile.
   *
   * @param id           Unique ID of the service profile.
   * @param body         Request with new information for updating the service
   *                                                           profile.
   * @param accountName  User account name.
   * @return Response from the API call
   */
  async updateServiceProfile(
    id: string,
    body: CreateServiceProfileRequest,
    accountName?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string>> {
    const req = this.createRequest('PUT');
    req.baseUrl('Services');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, createServiceProfileRequestSchema],
      accountName: [accountName, optional(string())],
    });
    req.header('Content-Type', 'application/json');
    req.header('AccountName', mapped.accountName);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/service/profile/${mapped.id}`;
    req.throwOn(400, EdgeServiceLaunchResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeServiceLaunchResultError, 'HTTP 401 Unauthorized.');
    req.defaultToError(EdgeServiceLaunchResultError, 'HTTP 500 Internal Server Error.');
    return req.callAsText(requestOptions);
  }

  /**
   * Helps register a service profile.
   *
   * @param id           Unique service profile ID.
   * @param body         Request for registration of a service profile.
   * @param accountName  User account name.
   * @return Response from the API call
   */
  async submitServiceProfile(
    id: string,
    body: ServicesProfileRegistration,
    accountName?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ServicesProfileRegistrationResult>> {
    const req = this.createRequest('PUT');
    req.baseUrl('Services');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, servicesProfileRegistrationSchema],
      accountName: [accountName, optional(string())],
    });
    req.header('Content-Type', 'application/json');
    req.header('AccountName', mapped.accountName);
    req.json(mapped.body);
    req.appendTemplatePath`/v1/service/profile/${mapped.id}/submit`;
    req.throwOn(400, EdgeServiceLaunchResultError, 'HTTP 400 Bad Request.');
    req.throwOn(401, EdgeServiceLaunchResultError, 'HTTP 401 Unauthorized.');
    req.throwOn(412, EdgeServiceLaunchResultError, 'Precondition Failed.');
    req.throwOn(500, EdgeServiceLaunchResultError, 'Internal Server Error.');
    req.defaultToError(EdgeServiceLaunchResultError, 'HTTP 500 Internal Server Error.');
    return req.callAsJson(
      servicesProfileRegistrationResultSchema,
      requestOptions
    );
  }
}
