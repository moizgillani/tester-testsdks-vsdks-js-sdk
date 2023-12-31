/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EventTypeEnum
 */
export enum EventTypeEnum {
  BACKUP = 'BACKUP',
  RESTORE = 'RESTORE',
  MOVE = 'MOVE',
  SUSPEND = 'SUSPEND',
  STOP = 'STOP',
  AUTOSCALE = 'AUTOSCALE',
  DEPRECATE = 'DEPRECATE',
}

/**
 * Schema for EventTypeEnum
 */
export const eventTypeEnumSchema: Schema<EventTypeEnum> = stringEnum(EventTypeEnum);
