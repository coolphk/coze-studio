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
 
import {
  ExpressionEditor,
  type ExpressionEditorProps,
} from '@/nodes-v2/components/expression-editor';
import { withField, useField } from '@/form';

export const ExpressionEditorField = withField<
  Omit<ExpressionEditorProps, 'value' | 'onChange'> & {
    testIDSuffix?: string;
  }
>(props => {
  const { name, value, onChange, errors, onFocus, onBlur } = useField<string>();
  const {
    placeholder,
    minRows,
    maxLength,
    disableSuggestion,
    disableCounter,
    // 旧版逻辑是用name作为testID后缀 新版节点name路径可能会变(如xxx -> inputs.xxx) 需要从外部指定
    testIDSuffix = name,
  } = props;

  return (
    <ExpressionEditor
      name={testIDSuffix}
      value={value}
      onChange={newValue => onChange(newValue as string)}
      key={name}
      placeholder={placeholder}
      minRows={minRows}
      maxLength={maxLength}
      isError={errors && errors?.length > 0}
      disableSuggestion={disableSuggestion}
      disableCounter={disableCounter}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
});
