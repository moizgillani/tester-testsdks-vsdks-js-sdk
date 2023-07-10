/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ServiceOnboardingTerraformGitBranch {
  branchName: string;
  terraformPath: string;
}

export const serviceOnboardingTerraformGitBranchSchema: Schema<ServiceOnboardingTerraformGitBranch> = object(
  {
    branchName: ['branchName', string()],
    terraformPath: ['terraformPath', string()],
  }
);
