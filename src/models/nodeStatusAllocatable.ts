/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, number, object, optional, Schema } from '../schema';

export interface NodeStatusAllocatable {
  cpuCount?: number;
  ephemeralStorageKB?: bigint;
  memoryKB?: bigint;
}

export const nodeStatusAllocatableSchema: Schema<NodeStatusAllocatable> = object(
  {
    cpuCount: ['cpuCount', optional(number())],
    ephemeralStorageKB: ['ephemeralStorageKB', optional(bigint())],
    memoryKB: ['memoryKB', optional(bigint())],
  }
);
