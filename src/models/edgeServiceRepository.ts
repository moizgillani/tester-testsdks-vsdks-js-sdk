/**
 * VerizonLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Credential, credentialSchema } from './credential';
import {
  CredentialsTypeEnum,
  credentialsTypeEnumSchema,
} from './credentialsTypeEnum';
import { ReacheabilityEnum, reacheabilityEnumSchema } from './reacheabilityEnum';
import {
  RepositoryResTypeEnum,
  repositoryResTypeEnumSchema,
} from './repositoryResTypeEnum';
import { Revision, revisionSchema } from './revision';
import { VendorInformation, vendorInformationSchema } from './vendorInformation';

export interface EdgeServiceRepository {
  name: string;
  description?: string;
  revision?: Revision;
  vendorInformation?: VendorInformation;
  type: RepositoryResTypeEnum;
  tag?: string;
  endpoint: string;
  reacheability: ReacheabilityEnum;
  /** Required if your repository uses a private certificate authencation.Please provide ur CA certificat in PEM format. */
  cACertificate?: string;
  agents?: string[];
  sslDisabled?: boolean;
  credentialsType?: CredentialsTypeEnum;
  credentials?: Credential;
  /** SSH Private Key in PEM format. */
  sshKey?: string;
}

export const edgeServiceRepositorySchema: Schema<EdgeServiceRepository> = object(
  {
    name: ['name', string()],
    description: ['description', optional(string())],
    revision: ['revision', optional(lazy(() => revisionSchema))],
    vendorInformation: [
      'vendorInformation',
      optional(lazy(() => vendorInformationSchema)),
    ],
    type: ['type', repositoryResTypeEnumSchema],
    tag: ['tag', optional(string())],
    endpoint: ['endpoint', string()],
    reacheability: ['reacheability', reacheabilityEnumSchema],
    cACertificate: ['CACertificate', optional(string())],
    agents: ['Agents', optional(array(string()))],
    sslDisabled: ['sslDisabled', optional(boolean())],
    credentialsType: ['credentialsType', optional(credentialsTypeEnumSchema)],
    credentials: ['credentials', optional(lazy(() => credentialSchema))],
    sshKey: ['sshKey', optional(string())],
  }
);
