/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Metro {
  iD?: string;
  name?: string;
  createdAt?: string;
  modifiedAt?: string;
  latitude?: string;
  longitude?: string;
  city?: string;
  state?: string;
  country?: string;
  cc?: string;
  st?: string;
  partnerId?: string;
}

export const metroSchema: Schema<Metro> = object({
  iD: ['ID', optional(string())],
  name: ['name', optional(string())],
  createdAt: ['created_at', optional(string())],
  modifiedAt: ['modified_at', optional(string())],
  latitude: ['latitude', optional(string())],
  longitude: ['longitude', optional(string())],
  city: ['city', optional(string())],
  state: ['state', optional(string())],
  country: ['country', optional(string())],
  cc: ['cc', optional(string())],
  st: ['st', optional(string())],
  partnerId: ['partner_id', optional(string())],
});