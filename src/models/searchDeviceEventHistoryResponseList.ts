/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  SearchDeviceResponse,
  searchDeviceResponseSchema,
} from './searchDeviceResponse';

/** A success response includes an array of all matching events. */
export interface SearchDeviceEventHistoryResponseList {
  searchDeviceEventHistory?: SearchDeviceResponse[];
}

export const searchDeviceEventHistoryResponseListSchema: Schema<SearchDeviceEventHistoryResponseList> = object(
  {
    searchDeviceEventHistory: [
      'SearchDeviceEventHistory',
      optional(array(lazy(() => searchDeviceResponseSchema))),
    ],
  }
);
