/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { MECSiteLocation, mECSiteLocationSchema } from './mECSiteLocation';

export interface MECSiteLocationsResult {
  mecsites?: MECSiteLocation[];
}

export const mECSiteLocationsResultSchema: Schema<MECSiteLocationsResult> = object(
  { mecsites: ['mecsites', optional(array(lazy(() => mECSiteLocationSchema)))] }
);