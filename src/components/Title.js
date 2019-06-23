import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return <h1>標籤清單({this.props.length})</h1>;
  }
}
