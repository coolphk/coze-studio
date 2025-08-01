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
 
/* eslint-disable complexity */
import React, { useMemo, useCallback, useEffect, useState } from 'react';

import { useService } from '@flowgram-adapter/free-layout-editor';
import { WorkflowVariableFacadeService } from '@coze-workflow/variable';
import { useNodeTestId } from '@coze-workflow/base';
import { I18n } from '@coze-arch/i18n';
import { IconCozInfoCircle } from '@coze-arch/coze-design/icons';
import { Tooltip, Typography, Input } from '@coze-arch/coze-design';

import { useNodeRenderScene } from '@/hooks/use-node-render-scene';

import { feedbackStatus2ValidateStatus } from '../../components/utils';
import { getUniqueName, getVariableName } from './utils';
import type { NodeInputNameProps } from './type';

export const NodeInputName = ({
  options,
  feedbackStatus,
  value,
  onChange,
  readonly,
  context,
}: NodeInputNameProps) => {
  const {
    style,
    input,
    inputParameters,
    initValidate = false,
    isPureText = false,
    prefix = '',
    suffix = '',
    format,
    tooltip,
    disabled,
  } = options;
  const [initialized, setInitialized] = useState<boolean>(false);
  const [userEdited, setUserEdited] = useState<boolean>(false);
  const [variableName, setVariableName] = useState<string | undefined>(value);
  const [text, setText] = useState<string | undefined>(value);

  const { getNodeSetterId } = useNodeTestId();
  const { isNewNodeRender } = useNodeRenderScene();
  const variableService = useService(WorkflowVariableFacadeService);

  // text 状态受控（删除节点时联动 text 的值）
  useEffect(() => {
    if (value !== text) {
      setText(value);
    }
  }, [value]);

  const computedVariableName = getVariableName({
    input,
    prefix,
    suffix,
    format,
    node: context.node,
    variableService,
  });

  const onInputChange = useCallback(
    (newInputValue: string): void => {
      setUserEdited(true);
      setText(newInputValue || '');
      setVariableName(undefined);
    },
    [onChange],
  );

  const onBlur = () => {
    onChange(text);
  };

  const validateStatus = useMemo(
    () => feedbackStatus2ValidateStatus(feedbackStatus),
    [feedbackStatus],
  );

  useEffect(() => {
    if (initValidate) {
      // 初始化写值触发校验
      onChange(value);
    }
    if (value) {
      setUserEdited(true);
    }
    setInitialized(true);
  }, []);

  if (initialized && !readonly && !userEdited && !isNewNodeRender) {
    if (computedVariableName && computedVariableName !== variableName) {
      const computedUniqueName = getUniqueName({
        variableName: computedVariableName,
        inputParameters,
      });
      onChange(computedUniqueName);
      setVariableName(computedVariableName);
      setText(computedUniqueName);
    } else if (!computedVariableName && variableName) {
      setVariableName(undefined);
      setText(undefined);
    }
  }

  return (
    <div
      className="flex items-center"
      style={{
        ...style,
        pointerEvents: readonly ? 'none' : 'auto',
      }}
    >
      {isPureText ? (
        <>
          <Typography.Text className="leading-8 text-xs">
            {value}
          </Typography.Text>
          {tooltip ? (
            <Tooltip content={tooltip}>
              <IconCozInfoCircle
                className="ml-1"
                style={{
                  fontSize: 12,
                }}
              />
            </Tooltip>
          ) : null}
        </>
      ) : (
        <>
          <Input
            data-testid={getNodeSetterId(context.path)}
            value={text}
            onChange={onInputChange}
            onBlur={onBlur}
            validateStatus={validateStatus}
            placeholder={I18n.t('workflow_detail_node_input_entername')}
            size="small"
            disabled={disabled}
          />
          {tooltip ? (
            <Tooltip content={tooltip}>
              <IconCozInfoCircle
                className="ml-1"
                style={{
                  fontSize: 12,
                }}
              />
            </Tooltip>
          ) : null}
        </>
      )}
    </div>
  );
};
