import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  beginEdit,
  endWithSaveEdit,
  endWithCancelEdit
} from '../../actions/actions';

class EditButton extends Component {
  render() {
    console.log('EditButton-render()_this:', this.props.isReadOnly);
    return (
      <span>
        {!this.props.isReadOnly ? (
          // 輸入條件
          <div className='btn-group' role='group'>
            <button
              onClick={() => this.props.endWithCancelEdit()}
              type='button'
              className='btn btn-danger'
            >
              取消
            </button>
            <button
              onClick={() => this.props.endWithSaveEdit()}
              type='button'
              className='btn btn-primary'
            >
              儲存
            </button>
          </div>
        ) : (
          <button
            onClick={() => this.props.beginEdit()}
            className='btn btn-outline-primary'
          >
            編輯
          </button>
        )}
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    isReadOnly: state.isReadOnly
  };
};
const mapDispacthToProps = dispatch => {
  return {
    beginEdit: () => {
      dispatch(beginEdit());
    },
    endWithSaveEdit: () => {
      dispatch(endWithSaveEdit());
    },
    endWithCancelEdit: () => {
      dispatch(endWithCancelEdit());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(EditButton);
