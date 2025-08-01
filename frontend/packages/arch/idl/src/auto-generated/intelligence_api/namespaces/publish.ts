/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as common_struct from './common_struct';
import * as intelligence_common_struct from './intelligence_common_struct';

export type Int64 = string | number;

/** bot */
export enum BotConnectorPublishStatus {
  /** 使用中 */
  Using = 0,
  /** 发布失败或用户注销而删除 */
  Delete = 1,
  /** 禁用或下架 */
  Disable = 3,
}

export enum ConnectorBindType {
  /** 无需绑定 */
  NoBindRequired = 1,
  /** Auth绑定 */
  AuthBind = 2,
  /** Kv绑定 */
  KvBind = 3,
  /** Kv并Auth授权 */
  KvAuthBind = 4,
  /** api渠道绑定 */
  ApiBind = 5,
  WebSDKBind = 6,
  StoreBind = 7,
  /** 授权和配置各一个按钮 */
  AuthAndConfig = 8,
  /** 模板渠道绑定 */
  TemplateBind = 9,
}

export enum ConnectorClassification {
  /** api或sdk */
  APIOrSDK = 1,
  /** 社交平台 */
  SocialPlatform = 2,
  /** Coze商店/模板 */
  Coze = 3,
  /** 小程序 */
  MiniProgram = 4,
  /** MCP扩展库 */
  CozeSpaceExtensionLibrary = 5,
}

export enum ConnectorConfigStatus {
  /** 已配置 */
  Configured = 1,
  /** 未配置 */
  NotConfigured = 2,
  /** Token发生变化 */
  Disconnected = 3,
  /** 配置中，授权中 */
  Configuring = 4,
  /** 需要重新配置  */
  NeedReconfiguring = 5,
}

/** project */
export enum ConnectorPublishStatus {
  /** 发布中 */
  Default = 0,
  /** 审核中 */
  Auditing = 1,
  /** 成功 */
  Success = 2,
  /** 失败 */
  Failed = 3,
  /** 禁用 */
  Disable = 4,
}

export enum ConnectorStatus {
  /** 正常 */
  Normal = 0,
  /** 审核中 */
  InReview = 1,
  /** 已下线 */
  Offline = 2,
}

export enum PublishRecordStatus {
  /** 打包中 */
  Packing = 0,
  /** 打包失败 */
  PackFailed = 1,
  /** 审核中 */
  Auditing = 2,
  /** 审核未通过 */
  AuditNotPass = 3,
  /** 渠道发布中 */
  ConnectorPublishing = 4,
  /** 发布完成 */
  PublishDone = 5,
}

export enum UserAuthStatus {
  /** 已授权 */
  Authorized = 1,
  /** 未授权 */
  UnAuthorized = 2,
  /** 授权中 */
  Authorizing = 3,
}

export interface AuthLoginInfo {
  app_id?: string;
  response_type?: string;
  authorize_url?: string;
  scope?: string;
  client_id?: string;
  duration?: string;
  aid?: string;
  client_key?: string;
}

export interface CheckProjectVersionNumberData {
  is_duplicate?: boolean;
}

export interface CheckProjectVersionNumberRequest {
  project_id: string;
  version_number: string;
}

export interface CheckProjectVersionNumberResponse {
  data?: CheckProjectVersionNumberData;
  code?: Int64;
  msg?: string;
}

export interface ConnectorPublishConfig {
  /** 发布渠道选择的Workflow/ChatFlow */
  selected_workflows?: Array<SelectedWorkflow>;
}

export interface ConnectorPublishResult {
  connector_id?: string;
  connector_name?: string;
  connector_icon_url?: string;
  /** 渠道发布状态 */
  connector_publish_status?: ConnectorPublishStatus;
  /** 渠道发布状态补充信息 */
  connector_publish_status_msg?: string;
  /** OpenIn链接 */
  share_link?: string;
  /** 小程序渠道下载链接 */
  download_link?: string;
  /** 渠道发布配置 */
  connector_publish_config?: ConnectorPublishConfig;
  /** 渠道绑定信息 key字段名 value是值 */
  connector_bind_info?: Record<string, string>;
}

export interface ConnectorUnionInfo {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  connector_options: Array<ConnectorUnionInfoOption>;
}

export interface ConnectorUnionInfoOption {
  /** 渠道 ID */
  connector_id: string;
  /** 展示名，如：托管发布、下载代码 */
  show_name: string;
}

export interface GetProjectPublishedConnectorRequest {
  project_id: string;
}

export interface GetProjectPublishedConnectorResponse {
  data?: Array<common_struct.ConnectorInfo>;
  code?: Int64;
  msg?: string;
}

export interface GetPublishRecordDetailRequest {
  project_id: string;
  /** 不传则获取最近一次发布记录 */
  publish_record_id?: string;
}

export interface GetPublishRecordDetailResponse {
  data?: PublishRecordDetail;
  code?: Int64;
  msg?: string;
}

export interface GetPublishRecordListRequest {
  project_id: string;
}

export interface GetPublishRecordListResponse {
  data?: Array<PublishRecordDetail>;
  code?: Int64;
  msg?: string;
}

export interface LastPublishInfo {
  version_number?: string;
  connector_ids?: Array<string>;
  /** 渠道发布配置 */
  connector_publish_config?: Record<Int64, ConnectorPublishConfig>;
}

export interface PackFailedDetail {
  entity_id?: string;
  entity_type?: common_struct.ResourceType;
  entity_name?: string;
}

export interface PublishConnectorInfo {
  id: string;
  name: string;
  icon_url: string;
  /** 描述 */
  description: string;
  /** 描述扩展 */
  description_extra?: string;
  /** 渠道类型 */
  connector_classification: ConnectorClassification;
  /** 配置状态 */
  config_status: ConnectorConfigStatus;
  /** 渠道状态 */
  connector_status?: ConnectorStatus;
  /** 绑定类型 */
  bind_type: ConnectorBindType;
  /** 绑定信息 key字段名 value是值 */
  bind_info: Record<string, string>;
  /** 绑定id信息，用于解绑使用 */
  bind_id?: string;
  /** 用户授权登陆信息 */
  auth_login_info?: AuthLoginInfo;
  /** 隐私政策 */
  privacy_policy?: string;
  /** 用户协议 */
  user_agreement?: string;
  /** 是否允许发布 */
  allow_publish?: boolean;
  /** 不允许发布的原因 */
  not_allow_publish_reason?: string;
  /** 渠道集合id，表示需要聚合展示的渠道 */
  connector_union_id?: string;
  /** UI选项 */
  UIOptions?: Array<UIOption>;
  /** 支持商业化 */
  support_monetization?: boolean;
  /** 安装指引 */
  installation_guide?: string;
  /** 目前仅 bind_type == 8 时这个字段才有  */
  auth_status?: UserAuthStatus;
  /** 配置状态toast */
  config_status_toast?: string;
  /** connector_status为审核中时补全信息按钮的url */
  to_complete_info_url?: string;
  /** 渠道发布提示 */
  connector_tips?: string;
}

export interface PublishConnectorListData {
  connector_list?: Array<PublishConnectorInfo>;
  last_publish_info?: LastPublishInfo;
  /** 渠道集合信息，key是connector_union_id */
  connector_union_info_map?: Record<Int64, ConnectorUnionInfo>;
}

export interface PublishConnectorListRequest {
  project_id: string;
}

export interface PublishConnectorListResponse {
  data?: PublishConnectorListData;
  code?: Int64;
  msg?: string;
}

export interface PublishIntelligenceUnListData {
  /** key是connector_id，value是下架结果 */
  connector_unlist_result_map?: Record<Int64, PublishIntelligenceUnListResult>;
}

export interface PublishIntelligenceUnListRequest {
  /** 已发布项目从渠道下架 */
  intelligence_id: string;
  connector_ids: Array<string>;
  intelligence_type: intelligence_common_struct.IntelligenceType;
}

export interface PublishIntelligenceUnListResponse {
  data?: PublishIntelligenceUnListData;
  code?: Int64;
  msg?: string;
}

export interface PublishIntelligenceUnListResult {
  is_success?: boolean;
  fail_reason?: string;
}

export interface PublishProjectData {
  /** 发布记录ID用于前端轮询 */
  publish_record_id?: string;
  /** 收费配置发布结果，海外环境才有 */
  publish_monetization_result?: boolean;
}

export interface PublishProjectRequest {
  project_id: string;
  /** 版本号 */
  version_number: string;
  /** 描述 */
  description?: string;
  /** key代表connector_id，value是渠道发布的参数 */
  connectors?: Record<Int64, Record<string, string>>;
  /** 渠道发布配置，key代表connector_id */
  connector_publish_config?: Record<Int64, ConnectorPublishConfig>;
}

export interface PublishProjectResponse {
  data?: PublishProjectData;
  code?: Int64;
  msg?: string;
}

export interface PublishRecordDetail {
  publish_record_id?: string;
  version_number?: string;
  /** 发布状态 */
  publish_status?: PublishRecordStatus;
  /** 该字段废弃，请使用publish_status_detail */
  publish_status_msg?: string;
  /** 渠道发布结果 */
  connector_publish_result?: Array<ConnectorPublishResult>;
  /** 发布状态补充信息 */
  publish_status_detail?: PublishRecordStatusDetail;
}

export interface PublishRecordStatusDetail {
  /** 打包失败详情 */
  pack_failed_detail?: Array<PackFailedDetail>;
}

export interface SelectedWorkflow {
  workflow_id?: string;
  workflow_name?: string;
}

export interface UIOption {
  /** UIChannel选项 */
  ui_channel?: string;
  /** 是否可选 */
  available?: boolean;
  /** 不可选原因 */
  unavailable_reason?: string;
}
/* eslint-enable */
