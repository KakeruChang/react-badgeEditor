import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTag, editTag } from '../../actions/actions';
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
    if (event.keyCode === 13) {
      this.props.editTag(this.state.editID, this.state.editValue);
      this.setState({
        editID: null,
        editValue: null
      });
    }
  }

  render() {
    const tagStyle = {
      // marginRight: `10px`,
      // border: `solid 1px #000`
      fontSize: `150%`
    };
    return this.props.tags.map(tag => {
      return (
        <span
          className='mr-3 my-2 badge badge-primary'
          onClick={() => this.startEdit(tag.id, tag.value)}
          style={tagStyle}
          key={tag.id}
        >
          {this.state.editID === tag.id ? (
            <input
              onChange={event => this.editHandler(event)}
              onKeyDown={event => this.saveEdit(event)}
              value={this.state.editValue}
            />
          ) : (
            <span>{tag.value}</span>
          )}
          <button
            className='ml-2 btn text-light'
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
}

const mapStateToProps = state => {
  return {
    tags: state.tags
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
