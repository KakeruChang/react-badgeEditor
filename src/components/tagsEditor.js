import React, { Component } from 'react';
import Title from '../components/tags/Title';
import Tags from '../components/tags/Tags';
import InputGroup from '../components/tags/InputGroup';

export default class tagsEditor extends Component {
  render() {
    return (
      <div>
        <Title />
        <Tags />
        <InputGroup />
        {/* <Title length={this.state.tags.length} />
          <Tags
            tags={this.state.tags}
            deleteTag={id => {
              this.deleteTag(id);
            }}
            editTag={(id, value) => {
              this.editTag(id, value);
            }}
          />
          <InputGroup
            addTag={input => {
              this.addTag(input);
            }}
          /> */}
        {/* 以箭頭函式將this指向函式宣告的物件 */}
      </div>
    );
  }
}
