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

package builtin

import (
	"context"
	"encoding/csv"
	"errors"
	"io"

	"github.com/cloudwego/eino/components/document/parser"
	"github.com/cloudwego/eino/schema"
	"github.com/dimchansky/utfbom"

	contract "github.com/coze-dev/coze-studio/backend/infra/contract/document/parser"
)

func parseCSV(config *contract.Config) parseFn {
	return func(ctx context.Context, reader io.Reader, opts ...parser.Option) (docs []*schema.Document, err error) {
		iter := &csvIterator{csv.NewReader(utfbom.SkipOnly(reader))}
		return parseByRowIterator(iter, config, opts...)
	}
}

type csvIterator struct {
	reader *csv.Reader
}

func (c *csvIterator) NextRow() (row []string, end bool, err error) {
	row, e := c.reader.Read()
	if e != nil {
		if errors.Is(e, io.EOF) {
			return nil, true, nil
		}
		return nil, false, err
	}

	return row, false, nil
}
