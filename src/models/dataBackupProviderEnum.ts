/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DataBackupProviderEnum
 */
export enum DataBackupProviderEnum {
  AWS = 'AWS',
  MINIO = 'MINIO',
}

/**
 * Schema for DataBackupProviderEnum
 */
export const dataBackupProviderEnumSchema: Schema<DataBackupProviderEnum> = stringEnum(DataBackupProviderEnum);
