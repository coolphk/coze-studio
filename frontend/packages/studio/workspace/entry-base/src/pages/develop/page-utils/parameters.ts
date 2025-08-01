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
 
import { IntelligenceType } from '@coze-arch/idl/intelligence_api';

import { DevelopCustomPublishStatus, DevelopCustomTypeStatus } from '../type';

export const getPublishRequestParam = (
  publishStatus: DevelopCustomPublishStatus | undefined,
) => {
  if (typeof publishStatus === 'undefined') {
    return;
  }
  if (publishStatus === DevelopCustomPublishStatus.All) {
    return;
  }
  return publishStatus === DevelopCustomPublishStatus.Publish;
};

/**
 * 项目类型请求前后端参数映射，将DevelopCustomTypeStatus映射为IntelligenceType[]
 * 需要根据是否可以展示抖音分身来决定是否处理 DouyinAvatarBot
 * @param type
 * @returns
 */
export const getTypeRequestParams = ({
  type,
}: {
  type: DevelopCustomTypeStatus;
}) => {
  const allIntelligenceTypeParams = [
    IntelligenceType.Bot,
    IntelligenceType.Project,
  ];
  const typeMap: Record<DevelopCustomTypeStatus, IntelligenceType[]> = {
    [DevelopCustomTypeStatus.All]: allIntelligenceTypeParams,
    [DevelopCustomTypeStatus.Agent]: [IntelligenceType.Bot],
    [DevelopCustomTypeStatus.Project]: [IntelligenceType.Project],
    [DevelopCustomTypeStatus.DouyinAvatarBot]: [
      IntelligenceType.DouyinAvatarBot,
    ],
  };

  return typeMap[type] || [];
};
