/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Locationscoord, locationscoordSchema } from './locationscoord';
import { NetworkType, networkTypeSchema } from './networkType';

export interface GetWirelessCoverageRequest {
  accountName: string;
  requestType: string;
  locationType: string;
  locations: Locationscoord;
  networkTypesList: NetworkType[];
}

export const getWirelessCoverageRequestSchema: Schema<GetWirelessCoverageRequest> = object(
  {
    accountName: ['accountName', string()],
    requestType: ['requestType', string()],
    locationType: ['locationType', string()],
    locations: ['locations', lazy(() => locationscoordSchema)],
    networkTypesList: [
      'networkTypesList',
      array(lazy(() => networkTypeSchema)),
    ],
  }
);
