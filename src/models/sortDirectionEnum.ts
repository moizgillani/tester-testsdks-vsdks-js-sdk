/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SortDirectionEnum
 */
export enum SortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

/**
 * Schema for SortDirectionEnum
 */
export const sortDirectionEnumSchema: Schema<SortDirectionEnum> = stringEnum(SortDirectionEnum);
