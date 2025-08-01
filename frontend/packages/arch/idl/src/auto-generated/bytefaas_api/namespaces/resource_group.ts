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

export type Int64 = string | number;

export interface CellGroupResource {
  /** List of function names in this cell group */
  function_list: Array<string>;
  /** Guaranteed CPU allocation for the group */
  group_guarantee_cpu: number;
  /** Fallback CPU allocation when guaranteed resources are exceeded */
  group_fallback_cpu: number;
  /** Guaranteed memory allocation for the group */
  group_guarantee_mem: number;
  /** Fallback memory allocation when guaranteed resources are exceeded */
  group_fallback_mem: number;
}

export interface GetAllResourceGroupsRequest {
  /** search by region */
  region?: string;
  /** search by zone */
  zone?: string;
}

export interface GetAllResourceGroupsResponse {
  code: number;
  /** Error message if operation failed */
  error: string;
  /** List of all resource groups matching the query */
  data?: Array<ResourceGroup>;
}

export interface GetResourceGroupRequest {
  /** id of the resource group to get */
  group_id: string;
}

export interface ResourceGroup {
  /** Unique identifier for the resource group */
  group_id: string;
  /** Name of the resource pool this group belongs to */
  resource_pool_name: string;
  /** Region where the resource group is located */
  region: string;
  /** Zone within the region where the resource group is located */
  zone: string;
  /** List of function names assigned to this resource group */
  function_list?: Array<string>;
  /** List of administrator user IDs for this resource group */
  admins?: Array<string>;
  /** Map of cell names to their respective resource configurations */
  cell_group_resource: Record<string, CellGroupResource>;
  /** Whether resource transfer between quality levels is disabled */
  disable_transfer?: boolean;
  /** Timestamp when the resource group was last updated */
  updated_at: string;
  /** User ID who last updated the resource group */
  updated_by: string;
}

export interface ResourceGroupResponse {
  /** API response code */
  code: number;
  /** Error message if operation failed */
  error: string;
  /** Resource group data if operation succeeded */
  data?: ResourceGroup;
}

export interface UpdateResourceGroupRequest {
  /** id of the resource group to update */
  group_id: string;
  /** if disable_transfer is false, when the resources in the resource group are insufficient, the high quality service will preempt the resources of the low quality service */
  disable_transfer?: boolean;
  /** operation for the target function list of the resource group, enum value: [ add, remove, replace ] */
  functions_operation?: string;
  /** target function list */
  function_list?: Array<string>;
}
/* eslint-enable */
