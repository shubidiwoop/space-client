import { IdentityType } from './definitions/space_pb';

export interface OpenFilePayload {
  path: string;
}

export interface CreateBucketPayload {
  slug: string;
}

export interface AddItemsPayload {
  targetPath: string;
  sourcePaths: string[];
}

export interface CreateFolderPayload {
  path: string;
}

export interface GetIdentityByUsernamePayload {
  username: string;
}

export interface CreateUsernameAndEmailPayload {
  email?: string;
  username: string;
}

export interface ShareBucketViaEmailPayload {
  bucket: string;
  email: string;
}

export interface ShareBucketViaIdentityPayload {
  identityType: IdentityType;
  identityValue: string;
  bucket: string;
}

export interface GenerateFileShareLinkPayload {
  bucket: string;
  filePath: string;
}
