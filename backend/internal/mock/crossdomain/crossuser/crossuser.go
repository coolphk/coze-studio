// Code generated by MockGen. DO NOT EDIT.
// Source: crossuser.go
//
// Generated by this command:
//
//	mockgen -destination ../../../internal/mock/crossdomain/crossuser/crossuser.go --package mockCrossUser -source crossuser.go
//

// Package mockCrossUser is a generated GoMock package.
package mockCrossUser

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"

	crossuser "github.com/coze-dev/coze-studio/backend/crossdomain/contract/crossuser"
)

// MockUser is a mock of User interface.
type MockUser struct {
	ctrl     *gomock.Controller
	recorder *MockUserMockRecorder
	isgomock struct{}
}

// MockUserMockRecorder is the mock recorder for MockUser.
type MockUserMockRecorder struct {
	mock *MockUser
}

// NewMockUser creates a new mock instance.
func NewMockUser(ctrl *gomock.Controller) *MockUser {
	mock := &MockUser{ctrl: ctrl}
	mock.recorder = &MockUserMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockUser) EXPECT() *MockUserMockRecorder {
	return m.recorder
}

// GetUserSpaceList mocks base method.
func (m *MockUser) GetUserSpaceList(ctx context.Context, userID int64) ([]*crossuser.EntitySpace, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetUserSpaceList", ctx, userID)
	ret0, _ := ret[0].([]*crossuser.EntitySpace)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetUserSpaceList indicates an expected call of GetUserSpaceList.
func (mr *MockUserMockRecorder) GetUserSpaceList(ctx, userID any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetUserSpaceList", reflect.TypeOf((*MockUser)(nil).GetUserSpaceList), ctx, userID)
}
