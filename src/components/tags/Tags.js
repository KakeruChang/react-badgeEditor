import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTag, editTag } from '../../actions/actions';
import '../../style/common.scss';
// import { deleteTag, editTag, updateToFirebase } from '../actions/actions';

class Tags extends Component {
  constructor() {
    super();
    // 要使用this就要super();
    this.state = {
      editID: null,
      editValue: null
    };
  }

  startEdit(id, value) {
    this.setState({
      editID: id,
      editValue: value
    });
  }
  editHandler(event) {
    this.setState({
      editValue: event.target.value
    });
  }
  saveEdit(event) {
    console.log(event);
    if (event.keyCode === 13) {
      this.props.editTag(this.state.editID, this.state.editValue);
      this.setState({
        editID: null,
        editValue: null
      });
    }
  }
  saveEditBlur(event) {
    console.log(event);
    this.setState({
      editID: null,
      editValue: null
    });
  }

  render() {
    const tagStyle = {
      // marginRight: `10px`,
      // border: `solid 1px #000`
      fontSize: `150%`
    };
    if (!this.props.isReadOnly) {
      // when edit , render with tmp
      return this.props.tmpTags.map(tag => {
        return (
          <span
            onClick={() => this.startEdit(tag.id, tag.value)}
            className='mr-3 my-2 badge badge-primary cursor-pointer'
            style={tagStyle}
            key={tag.id}
          >
            {this.state.editID === tag.id ? (
              <input
                onChange={event => this.editHandler(event)}
                onKeyDown={event => this.saveEdit(event)}
                onBlur={event => this.saveEditBlur(event)}
                value={this.state.editValue}
              />
            ) : (
              <span>{tag.value}</span>
            )}
            <button
              className='ml-2 btn text-light hoverCircleButton'
              onClick={() => {
                this.props.deleteTag(tag.id);
              }}
            >
              X
            </button>
          </span>
        );
      });
    }
    return this.props.tags.map(tag => {
      return (
        <span
          className='mr-3 my-2 badge badge-primary'
          style={tagStyle}
          key={tag.id}
        >
          <span>{tag.value}</span>
        </span>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    tags: state.data.tags,
    tmpTags: state.tmpData.tags,
    isReadOnly: state.isReadOnly
  };
};
const mapDispacthToProps = dispatch => {
  return {
    deleteTag: id => {
      dispatch(deleteTag(id));
    },
    editTag: (id, value) => {
      dispatch(editTag(id, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Tags);
