/**
 * @fileoverview gRPC-Web generated client stub for space
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  AcceptBucketInvitationRequest,
  AcceptBucketInvitationResponse,
  AddItemsRequest,
  AddItemsResponse,
  BackupKeysByPassphraseRequest,
  BackupKeysByPassphraseResponse,
  CopyAndShareFilesRequest,
  CopyAndShareFilesResponse,
  CreateBucketRequest,
  CreateBucketResponse,
  CreateFolderRequest,
  CreateFolderResponse,
  CreateLocalKeysBackupRequest,
  CreateLocalKeysBackupResponse,
  FileEventResponse,
  FuseDriveResponse,
  GenerateKeyPairRequest,
  GenerateKeyPairResponse,
  GeneratePublicFileLinkRequest,
  GeneratePublicFileLinkResponse,
  GetNotificationsRequest,
  GetNotificationsResponse,
  GetPublicKeyRequest,
  GetPublicKeyResponse,
  JoinBucketRequest,
  JoinBucketResponse,
  ListBucketsRequest,
  ListBucketsResponse,
  ListDirectoriesRequest,
  ListDirectoriesResponse,
  ListDirectoryRequest,
  ListDirectoryResponse,
  NotificationEventResponse,
  OpenFileRequest,
  OpenFileResponse,
  OpenPublicFileRequest,
  OpenPublicFileResponse,
  ReadNotificationRequest,
  ReadNotificationResponse,
  RecoverKeysByLocalBackupRequest,
  RecoverKeysByLocalBackupResponse,
  RecoverKeysByPassphraseRequest,
  RecoverKeysByPassphraseResponse,
  RejectBucketInvitationRequest,
  RejectBucketInvitationResponse,
  ShareBucketRequest,
  ShareBucketResponse,
  ShareBucketViaPublicKeyRequest,
  ShareBucketViaPublicKeyResponse,
  TextileEventResponse,
  ToggleFuseRequest} from './space_pb';

export class SpaceApiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListDirectories = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDirectoriesResponse,
    (request: ListDirectoriesRequest) => {
      return request.serializeBinary();
    },
    ListDirectoriesResponse.deserializeBinary
  );

  listDirectories(
    request: ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListDirectoriesResponse>;

  listDirectories(
    request: ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDirectoriesResponse) => void): grpcWeb.ClientReadableStream<ListDirectoriesResponse>;

  listDirectories(
    request: ListDirectoriesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListDirectoriesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ListDirectories', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListDirectories,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ListDirectories',
    request,
    metadata || {},
    this.methodInfoListDirectories);
  }

  methodInfoListDirectory = new grpcWeb.AbstractClientBase.MethodInfo(
    ListDirectoryResponse,
    (request: ListDirectoryRequest) => {
      return request.serializeBinary();
    },
    ListDirectoryResponse.deserializeBinary
  );

  listDirectory(
    request: ListDirectoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListDirectoryResponse>;

  listDirectory(
    request: ListDirectoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListDirectoryResponse) => void): grpcWeb.ClientReadableStream<ListDirectoryResponse>;

  listDirectory(
    request: ListDirectoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListDirectoryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ListDirectory', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListDirectory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ListDirectory',
    request,
    metadata || {},
    this.methodInfoListDirectory);
  }

  methodInfoGenerateKeyPair = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateKeyPairResponse,
    (request: GenerateKeyPairRequest) => {
      return request.serializeBinary();
    },
    GenerateKeyPairResponse.deserializeBinary
  );

  generateKeyPair(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenerateKeyPairResponse>;

  generateKeyPair(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void): grpcWeb.ClientReadableStream<GenerateKeyPairResponse>;

  generateKeyPair(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GenerateKeyPair', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenerateKeyPair,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GenerateKeyPair',
    request,
    metadata || {},
    this.methodInfoGenerateKeyPair);
  }

  methodInfoGenerateKeyPairWithForce = new grpcWeb.AbstractClientBase.MethodInfo(
    GenerateKeyPairResponse,
    (request: GenerateKeyPairRequest) => {
      return request.serializeBinary();
    },
    GenerateKeyPairResponse.deserializeBinary
  );

  generateKeyPairWithForce(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null): Promise<GenerateKeyPairResponse>;

  generateKeyPairWithForce(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void): grpcWeb.ClientReadableStream<GenerateKeyPairResponse>;

  generateKeyPairWithForce(
    request: GenerateKeyPairRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GenerateKeyPairResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GenerateKeyPairWithForce', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGenerateKeyPairWithForce,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GenerateKeyPairWithForce',
    request,
    metadata || {},
    this.methodInfoGenerateKeyPairWithForce);
  }

  methodInfoGetPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    GetPublicKeyResponse,
    (request: GetPublicKeyRequest) => {
      return request.serializeBinary();
    },
    GetPublicKeyResponse.deserializeBinary
  );

  getPublicKey(
    request: GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetPublicKeyResponse>;

  getPublicKey(
    request: GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetPublicKeyResponse) => void): grpcWeb.ClientReadableStream<GetPublicKeyResponse>;

  getPublicKey(
    request: GetPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetPublicKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GetPublicKey', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetPublicKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetPublicKey',
    request,
    metadata || {},
    this.methodInfoGetPublicKey);
  }

  methodInfoSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    FileEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    FileEventResponse.deserializeBinary
  );

  subscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/Subscribe', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoSubscribe);
  }

  methodInfoTxlSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    TextileEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    TextileEventResponse.deserializeBinary
  );

  txlSubscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/TxlSubscribe', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoTxlSubscribe);
  }

  methodInfoOpenFile = new grpcWeb.AbstractClientBase.MethodInfo(
    OpenFileResponse,
    (request: OpenFileRequest) => {
      return request.serializeBinary();
    },
    OpenFileResponse.deserializeBinary
  );

  openFile(
    request: OpenFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<OpenFileResponse>;

  openFile(
    request: OpenFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenFileResponse) => void): grpcWeb.ClientReadableStream<OpenFileResponse>;

  openFile(
    request: OpenFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: OpenFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/OpenFile', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoOpenFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/OpenFile',
    request,
    metadata || {},
    this.methodInfoOpenFile);
  }

  methodInfoGeneratePublicFileLink = new grpcWeb.AbstractClientBase.MethodInfo(
    GeneratePublicFileLinkResponse,
    (request: GeneratePublicFileLinkRequest) => {
      return request.serializeBinary();
    },
    GeneratePublicFileLinkResponse.deserializeBinary
  );

  generatePublicFileLink(
    request: GeneratePublicFileLinkRequest,
    metadata: grpcWeb.Metadata | null): Promise<GeneratePublicFileLinkResponse>;

  generatePublicFileLink(
    request: GeneratePublicFileLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GeneratePublicFileLinkResponse) => void): grpcWeb.ClientReadableStream<GeneratePublicFileLinkResponse>;

  generatePublicFileLink(
    request: GeneratePublicFileLinkRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GeneratePublicFileLinkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GeneratePublicFileLink', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGeneratePublicFileLink,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GeneratePublicFileLink',
    request,
    metadata || {},
    this.methodInfoGeneratePublicFileLink);
  }

  methodInfoOpenPublicFile = new grpcWeb.AbstractClientBase.MethodInfo(
    OpenPublicFileResponse,
    (request: OpenPublicFileRequest) => {
      return request.serializeBinary();
    },
    OpenPublicFileResponse.deserializeBinary
  );

  openPublicFile(
    request: OpenPublicFileRequest,
    metadata: grpcWeb.Metadata | null): Promise<OpenPublicFileResponse>;

  openPublicFile(
    request: OpenPublicFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: OpenPublicFileResponse) => void): grpcWeb.ClientReadableStream<OpenPublicFileResponse>;

  openPublicFile(
    request: OpenPublicFileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: OpenPublicFileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/OpenPublicFile', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoOpenPublicFile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/OpenPublicFile',
    request,
    metadata || {},
    this.methodInfoOpenPublicFile);
  }

  methodInfoAddItems = new grpcWeb.AbstractClientBase.MethodInfo(
    AddItemsResponse,
    (request: AddItemsRequest) => {
      return request.serializeBinary();
    },
    AddItemsResponse.deserializeBinary
  );

  addItems(
    request: AddItemsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/AddItems', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoAddItems);
  }

  methodInfoCreateFolder = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateFolderResponse,
    (request: CreateFolderRequest) => {
      return request.serializeBinary();
    },
    CreateFolderResponse.deserializeBinary
  );

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateFolderResponse>;

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateFolderResponse) => void): grpcWeb.ClientReadableStream<CreateFolderResponse>;

  createFolder(
    request: CreateFolderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateFolderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CreateFolder', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateFolder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateFolder',
    request,
    metadata || {},
    this.methodInfoCreateFolder);
  }

  methodInfoToggleFuseDrive = new grpcWeb.AbstractClientBase.MethodInfo(
    FuseDriveResponse,
    (request: ToggleFuseRequest) => {
      return request.serializeBinary();
    },
    FuseDriveResponse.deserializeBinary
  );

  toggleFuseDrive(
    request: ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null): Promise<FuseDriveResponse>;

  toggleFuseDrive(
    request: ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void): grpcWeb.ClientReadableStream<FuseDriveResponse>;

  toggleFuseDrive(
    request: ToggleFuseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ToggleFuseDrive', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoToggleFuseDrive,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ToggleFuseDrive',
    request,
    metadata || {},
    this.methodInfoToggleFuseDrive);
  }

  methodInfoGetFuseDriveStatus = new grpcWeb.AbstractClientBase.MethodInfo(
    FuseDriveResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    FuseDriveResponse.deserializeBinary
  );

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<FuseDriveResponse>;

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void): grpcWeb.ClientReadableStream<FuseDriveResponse>;

  getFuseDriveStatus(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FuseDriveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GetFuseDriveStatus', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetFuseDriveStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetFuseDriveStatus',
    request,
    metadata || {},
    this.methodInfoGetFuseDriveStatus);
  }

  methodInfoCreateBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateBucketResponse,
    (request: CreateBucketRequest) => {
      return request.serializeBinary();
    },
    CreateBucketResponse.deserializeBinary
  );

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateBucketResponse>;

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateBucketResponse) => void): grpcWeb.ClientReadableStream<CreateBucketResponse>;

  createBucket(
    request: CreateBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CreateBucket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateBucket',
    request,
    metadata || {},
    this.methodInfoCreateBucket);
  }

  methodInfoBackupKeysByPassphrase = new grpcWeb.AbstractClientBase.MethodInfo(
    BackupKeysByPassphraseResponse,
    (request: BackupKeysByPassphraseRequest) => {
      return request.serializeBinary();
    },
    BackupKeysByPassphraseResponse.deserializeBinary
  );

  backupKeysByPassphrase(
    request: BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<BackupKeysByPassphraseResponse>;

  backupKeysByPassphrase(
    request: BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BackupKeysByPassphraseResponse) => void): grpcWeb.ClientReadableStream<BackupKeysByPassphraseResponse>;

  backupKeysByPassphrase(
    request: BackupKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: BackupKeysByPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/BackupKeysByPassphrase', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoBackupKeysByPassphrase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/BackupKeysByPassphrase',
    request,
    metadata || {},
    this.methodInfoBackupKeysByPassphrase);
  }

  methodInfoRecoverKeysByPassphrase = new grpcWeb.AbstractClientBase.MethodInfo(
    RecoverKeysByPassphraseResponse,
    (request: RecoverKeysByPassphraseRequest) => {
      return request.serializeBinary();
    },
    RecoverKeysByPassphraseResponse.deserializeBinary
  );

  recoverKeysByPassphrase(
    request: RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null): Promise<RecoverKeysByPassphraseResponse>;

  recoverKeysByPassphrase(
    request: RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RecoverKeysByPassphraseResponse) => void): grpcWeb.ClientReadableStream<RecoverKeysByPassphraseResponse>;

  recoverKeysByPassphrase(
    request: RecoverKeysByPassphraseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: RecoverKeysByPassphraseResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/RecoverKeysByPassphrase', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoRecoverKeysByPassphrase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/RecoverKeysByPassphrase',
    request,
    metadata || {},
    this.methodInfoRecoverKeysByPassphrase);
  }

  methodInfoCreateLocalKeysBackup = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateLocalKeysBackupResponse,
    (request: CreateLocalKeysBackupRequest) => {
      return request.serializeBinary();
    },
    CreateLocalKeysBackupResponse.deserializeBinary
  );

  createLocalKeysBackup(
    request: CreateLocalKeysBackupRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateLocalKeysBackupResponse>;

  createLocalKeysBackup(
    request: CreateLocalKeysBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateLocalKeysBackupResponse) => void): grpcWeb.ClientReadableStream<CreateLocalKeysBackupResponse>;

  createLocalKeysBackup(
    request: CreateLocalKeysBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateLocalKeysBackupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CreateLocalKeysBackup', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCreateLocalKeysBackup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CreateLocalKeysBackup',
    request,
    metadata || {},
    this.methodInfoCreateLocalKeysBackup);
  }

  methodInfoRecoverKeysByLocalBackup = new grpcWeb.AbstractClientBase.MethodInfo(
    RecoverKeysByLocalBackupResponse,
    (request: RecoverKeysByLocalBackupRequest) => {
      return request.serializeBinary();
    },
    RecoverKeysByLocalBackupResponse.deserializeBinary
  );

  recoverKeysByLocalBackup(
    request: RecoverKeysByLocalBackupRequest,
    metadata: grpcWeb.Metadata | null): Promise<RecoverKeysByLocalBackupResponse>;

  recoverKeysByLocalBackup(
    request: RecoverKeysByLocalBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RecoverKeysByLocalBackupResponse) => void): grpcWeb.ClientReadableStream<RecoverKeysByLocalBackupResponse>;

  recoverKeysByLocalBackup(
    request: RecoverKeysByLocalBackupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: RecoverKeysByLocalBackupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/RecoverKeysByLocalBackup', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoRecoverKeysByLocalBackup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/RecoverKeysByLocalBackup',
    request,
    metadata || {},
    this.methodInfoRecoverKeysByLocalBackup);
  }

  methodInfoShareBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    ShareBucketResponse,
    (request: ShareBucketRequest) => {
      return request.serializeBinary();
    },
    ShareBucketResponse.deserializeBinary
  );

  shareBucket(
    request: ShareBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<ShareBucketResponse>;

  shareBucket(
    request: ShareBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ShareBucketResponse) => void): grpcWeb.ClientReadableStream<ShareBucketResponse>;

  shareBucket(
    request: ShareBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ShareBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ShareBucket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoShareBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ShareBucket',
    request,
    metadata || {},
    this.methodInfoShareBucket);
  }

  methodInfoJoinBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    JoinBucketResponse,
    (request: JoinBucketRequest) => {
      return request.serializeBinary();
    },
    JoinBucketResponse.deserializeBinary
  );

  joinBucket(
    request: JoinBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<JoinBucketResponse>;

  joinBucket(
    request: JoinBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: JoinBucketResponse) => void): grpcWeb.ClientReadableStream<JoinBucketResponse>;

  joinBucket(
    request: JoinBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: JoinBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/JoinBucket', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoJoinBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/JoinBucket',
    request,
    metadata || {},
    this.methodInfoJoinBucket);
  }

  methodInfoShareBucketViaPublicKey = new grpcWeb.AbstractClientBase.MethodInfo(
    ShareBucketViaPublicKeyResponse,
    (request: ShareBucketViaPublicKeyRequest) => {
      return request.serializeBinary();
    },
    ShareBucketViaPublicKeyResponse.deserializeBinary
  );

  shareBucketViaPublicKey(
    request: ShareBucketViaPublicKeyRequest,
    metadata: grpcWeb.Metadata | null): Promise<ShareBucketViaPublicKeyResponse>;

  shareBucketViaPublicKey(
    request: ShareBucketViaPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ShareBucketViaPublicKeyResponse) => void): grpcWeb.ClientReadableStream<ShareBucketViaPublicKeyResponse>;

  shareBucketViaPublicKey(
    request: ShareBucketViaPublicKeyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ShareBucketViaPublicKeyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ShareBucketViaPublicKey', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoShareBucketViaPublicKey,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ShareBucketViaPublicKey',
    request,
    metadata || {},
    this.methodInfoShareBucketViaPublicKey);
  }

  methodInfoAcceptBucketInvitation = new grpcWeb.AbstractClientBase.MethodInfo(
    AcceptBucketInvitationResponse,
    (request: AcceptBucketInvitationRequest) => {
      return request.serializeBinary();
    },
    AcceptBucketInvitationResponse.deserializeBinary
  );

  acceptBucketInvitation(
    request: AcceptBucketInvitationRequest,
    metadata: grpcWeb.Metadata | null): Promise<AcceptBucketInvitationResponse>;

  acceptBucketInvitation(
    request: AcceptBucketInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: AcceptBucketInvitationResponse) => void): grpcWeb.ClientReadableStream<AcceptBucketInvitationResponse>;

  acceptBucketInvitation(
    request: AcceptBucketInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: AcceptBucketInvitationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/AcceptBucketInvitation', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoAcceptBucketInvitation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/AcceptBucketInvitation',
    request,
    metadata || {},
    this.methodInfoAcceptBucketInvitation);
  }

  methodInfoRejectBucketInvitation = new grpcWeb.AbstractClientBase.MethodInfo(
    RejectBucketInvitationResponse,
    (request: RejectBucketInvitationRequest) => {
      return request.serializeBinary();
    },
    RejectBucketInvitationResponse.deserializeBinary
  );

  rejectBucketInvitation(
    request: RejectBucketInvitationRequest,
    metadata: grpcWeb.Metadata | null): Promise<RejectBucketInvitationResponse>;

  rejectBucketInvitation(
    request: RejectBucketInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: RejectBucketInvitationResponse) => void): grpcWeb.ClientReadableStream<RejectBucketInvitationResponse>;

  rejectBucketInvitation(
    request: RejectBucketInvitationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: RejectBucketInvitationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/RejectBucketInvitation', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoRejectBucketInvitation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/RejectBucketInvitation',
    request,
    metadata || {},
    this.methodInfoRejectBucketInvitation);
  }

  methodInfoNotificationSubscribe = new grpcWeb.AbstractClientBase.MethodInfo(
    NotificationEventResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    NotificationEventResponse.deserializeBinary
  );

  notificationSubscribe(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/space.SpaceApi/NotificationSubscribe', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoNotificationSubscribe);
  }

  methodInfoListBuckets = new grpcWeb.AbstractClientBase.MethodInfo(
    ListBucketsResponse,
    (request: ListBucketsRequest) => {
      return request.serializeBinary();
    },
    ListBucketsResponse.deserializeBinary
  );

  listBuckets(
    request: ListBucketsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListBucketsResponse>;

  listBuckets(
    request: ListBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListBucketsResponse) => void): grpcWeb.ClientReadableStream<ListBucketsResponse>;

  listBuckets(
    request: ListBucketsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListBucketsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ListBuckets', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoListBuckets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ListBuckets',
    request,
    metadata || {},
    this.methodInfoListBuckets);
  }

  methodInfoCopyAndShareFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    CopyAndShareFilesResponse,
    (request: CopyAndShareFilesRequest) => {
      return request.serializeBinary();
    },
    CopyAndShareFilesResponse.deserializeBinary
  );

  copyAndShareFiles(
    request: CopyAndShareFilesRequest,
    metadata: grpcWeb.Metadata | null): Promise<CopyAndShareFilesResponse>;

  copyAndShareFiles(
    request: CopyAndShareFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CopyAndShareFilesResponse) => void): grpcWeb.ClientReadableStream<CopyAndShareFilesResponse>;

  copyAndShareFiles(
    request: CopyAndShareFilesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CopyAndShareFilesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/CopyAndShareFiles', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoCopyAndShareFiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/CopyAndShareFiles',
    request,
    metadata || {},
    this.methodInfoCopyAndShareFiles);
  }

  methodInfoGetNotifications = new grpcWeb.AbstractClientBase.MethodInfo(
    GetNotificationsResponse,
    (request: GetNotificationsRequest) => {
      return request.serializeBinary();
    },
    GetNotificationsResponse.deserializeBinary
  );

  getNotifications(
    request: GetNotificationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetNotificationsResponse>;

  getNotifications(
    request: GetNotificationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetNotificationsResponse) => void): grpcWeb.ClientReadableStream<GetNotificationsResponse>;

  getNotifications(
    request: GetNotificationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetNotificationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/GetNotifications', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetNotifications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/GetNotifications',
    request,
    metadata || {},
    this.methodInfoGetNotifications);
  }

  methodInfoReadNotification = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadNotificationResponse,
    (request: ReadNotificationRequest) => {
      return request.serializeBinary();
    },
    ReadNotificationResponse.deserializeBinary
  );

  readNotification(
    request: ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null): Promise<ReadNotificationResponse>;

  readNotification(
    request: ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReadNotificationResponse) => void): grpcWeb.ClientReadableStream<ReadNotificationResponse>;

  readNotification(
    request: ReadNotificationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ReadNotificationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/space.SpaceApi/ReadNotification', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoReadNotification,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/space.SpaceApi/ReadNotification',
    request,
    metadata || {},
    this.methodInfoReadNotification);
  }

}

