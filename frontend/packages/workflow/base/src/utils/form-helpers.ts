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
 
import { cloneDeep } from 'lodash-es';
import { isFormV2 } from '@flowgram-adapter/free-layout-editor';
import { FlowNodeFormData } from '@flowgram-adapter/free-layout-editor';
import { type FlowNodeEntity } from '@flowgram-adapter/free-layout-editor';

/**
 * 找到以 pathEnds 为结尾的 FormItem，并获取它的值
 * @param node
 * @param pathEnds
 * @returns
 */
export function getFormValueByPathEnds<T = unknown>(
  node: FlowNodeEntity,
  pathEnds: string,
): T | undefined {
  return isFormV2(node)
    ? getFormValueByPathEndsV2<T>(node, pathEnds)
    : getFormValueByPathEndsV1<T>(node, pathEnds);
}

function getFormValueByPathEndsV1<T = unknown>(
  node: FlowNodeEntity,
  pathEnds: string,
): T | undefined {
  const form = node.getData(FlowNodeFormData).formModel;

  const paths: string[] = [...form.formItemPathMap.keys()];
  const formPath = paths.find(path => path.endsWith(pathEnds));

  if (!formPath) {
    return undefined;
  }

  const formValue = cloneDeep<T>(form.getFormItemValueByPath(formPath));
  return formValue;
}

function getFormValueByPathEndsV2<T = unknown>(
  node: FlowNodeEntity,
  pathEnds: string,
): T | undefined {
  const form = node.getData(FlowNodeFormData).formModel;
  const data = form.getFormItemValueByPath('/');

  if (!data || typeof data !== 'object') {
    return undefined;
  }

  const value = findValueByPathEnds<T>(data, pathEnds);

  return cloneDeep(value);
}

const findValueByPathEnds = <T = unknown>(
  obj: unknown,
  pathEnds: string,
  currentPath = '',
): T | undefined => {
  if (!obj) {
    return undefined;
  }

  // 检查当前路径是否以 pathEnds 结尾
  if (currentPath.endsWith(pathEnds)) {
    return obj as T;
  }

  // 处理对象
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newPath = currentPath ? `${currentPath}/${key}` : `/${key}`;

        if (newPath.endsWith(pathEnds)) {
          return obj[key] as T;
        }

        // 递归查找子对象
        const result = findValueByPathEnds(obj[key], pathEnds, newPath);
        if (result !== undefined) {
          return result as T;
        }
      }
    }
  }

  // 处理数组
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const newPath = `${currentPath}/${i}`;

      if (newPath.endsWith(pathEnds)) {
        return obj[i] as T;
      }

      // 递归查找数组元素
      const result = findValueByPathEnds(obj[i], pathEnds, newPath);
      if (result !== undefined) {
        return result as T;
      }
    }
  }

  return undefined;
};
