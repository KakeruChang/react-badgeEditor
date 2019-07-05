import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTag } from '../../actions/actions';

class InputGroup extends Component {
  constructor() {
    super();
    this.state = {
      newTag: { value: '', id: null }
    };
    this.addTag = this.addTag.bind(this);
    // 'btd' => tab
  }

  addTag() {
    if (!this.state.newTag.value) {
      return;
    }
    this.props.addTag(this.state.newTag);
    this.setState({
      newTag: { value: '', id: null }
    });
  }

  handleChange(event) {
    const timestamp = Date.now();
    this.setState({
      newTag: { value: event.target.value, id: timestamp }
    });
  }
  handleKeyDown(event) {
    event.keyCode === 13 && this.addTag();
    // if (event.keyCode === 13) {
    //   this.addTag();
    // }
  }

  render() {
    return (
      <div>
        <input
          onChange={event => this.handleChange(event)}
          onKeyDown={event => this.handleKeyDown(event)}
          value={this.state.newTag.value}
        />
        <button onClick={this.addTag}>新增</button>
        {/* <button
          onClick={() => {
            this.props.addTag(this.state.newTag);
          }}
        >
          新增
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags
  };
};
const mapDispacthToProps = dispatch => {
  return {
    addTag: input => {
      dispatch(addTag(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(InputGroup);
