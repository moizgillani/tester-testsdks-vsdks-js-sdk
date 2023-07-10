/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Request to a new, randomly generated password for the current username. */
export interface SessionResetPasswordRequest {
  /** The current password for the username. */
  oldPassword?: string;
}

export const sessionResetPasswordRequestSchema: Schema<SessionResetPasswordRequest> = object(
  { oldPassword: ['oldPassword', optional(string())] }
);
