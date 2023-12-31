/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface ServiceLaunchHelmGitTag {
  tagName: string;
  helmChartPath: string;
  valuesYamlPaths: string[];
}

export const serviceLaunchHelmGitTagSchema: Schema<ServiceLaunchHelmGitTag> = object(
  {
    tagName: ['tagName', string()],
    helmChartPath: ['helmChartPath', string()],
    valuesYamlPaths: ['valuesYamlPaths', array(string())],
  }
);
