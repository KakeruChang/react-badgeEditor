import React, { Component } from 'react';
import { connect } from 'react-redux';

class Title extends Component {
  render() {
    return <h1>標籤清單({this.props.length})</h1>;
  }
}

const mapStateToProps = state => {
  return {
    length: state.tags.length
  };
};

export default connect(mapStateToProps)(Title);
