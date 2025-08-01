// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

import "github.com/coze-dev/coze-studio/backend/api/model/crossdomain/plugin"

const TableNameAgentToolDraft = "agent_tool_draft"

// AgentToolDraft Draft Agent Tool
type AgentToolDraft struct {
	ID          int64                     `gorm:"column:id;primaryKey;comment:Primary Key ID" json:"id"`                                                 // Primary Key ID
	AgentID     int64                     `gorm:"column:agent_id;not null;comment:Agent ID" json:"agent_id"`                                             // Agent ID
	PluginID    int64                     `gorm:"column:plugin_id;not null;comment:Plugin ID" json:"plugin_id"`                                          // Plugin ID
	ToolID      int64                     `gorm:"column:tool_id;not null;comment:Tool ID" json:"tool_id"`                                                // Tool ID
	CreatedAt   int64                     `gorm:"column:created_at;not null;autoCreateTime:milli;comment:Create Time in Milliseconds" json:"created_at"` // Create Time in Milliseconds
	SubURL      string                    `gorm:"column:sub_url;not null;comment:Sub URL Path" json:"sub_url"`                                           // Sub URL Path
	Method      string                    `gorm:"column:method;not null;comment:HTTP Request Method" json:"method"`                                      // HTTP Request Method
	ToolName    string                    `gorm:"column:tool_name;not null;comment:Tool Name" json:"tool_name"`                                          // Tool Name
	ToolVersion string                    `gorm:"column:tool_version;not null;comment:Tool Version, e.g. v1.0.0" json:"tool_version"`                    // Tool Version, e.g. v1.0.0
	Operation   *plugin.Openapi3Operation `gorm:"column:operation;comment:Tool Openapi Operation Schema;serializer:json" json:"operation"`               // Tool Openapi Operation Schema
}

// TableName AgentToolDraft's table name
func (*AgentToolDraft) TableName() string {
	return TableNameAgentToolDraft
}
